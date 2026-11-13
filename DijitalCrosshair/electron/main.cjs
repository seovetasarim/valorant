const { app, BrowserWindow, globalShortcut, ipcMain, screen, Tray, Menu, shell } = require("electron");
const { execFile } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const DEFAULTS = {
  enabled: true,
  shape: "cross",
  color: "#ff4851",
  size: 26,
  thickness: 2,
  length: 10,
  gap: 5,
  opacity: 1,
  outline: true,
  hotkey: "Control+Shift+X",
  launchAtLogin: false,
};

let settingsWindow;
let splashWindow;
let tray;
let overlayWindows = new Map();
let settings = { ...DEFAULTS };
let isQuitting = false;
let bootstrapping = true;
let overlayAllowed = process.platform !== "win32";
let gameSince = 0;
let pollTimer;
let pollInFlight = false;

// Valorant, başlarken ekranda tıklamayı geçiren şeffaf "screen-saver" penceresi
// görürse oyunu hiç açmadan "failed to launch" veriyor. Nişangah penceresi bu
// yüzden yalnızca oyun süreci oturduktan sonra oluşturulur.
const GAME_IMAGES = ["valorant-win64-shipping.exe", "cs2.exe"];
const GAME_POLL_MS = 1000;
const GAME_SETTLE_MS = 2500;

const isDev = Boolean(process.env.VITE_DEV_SERVER_URL);
const preloadPath = path.join(__dirname, "preload.cjs");
const appIconPath = path.join(__dirname, "assets", process.platform === "win32" ? "icon.ico" : "icon.png");
const splashHtmlPath = path.join(__dirname, "splash.html");
const OVERLAY_SIZE = 96;
const SPLASH_MIN_MS = 1500;
const SPLASH_FADE_MS = 360;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function settingsFile() {
  return path.join(app.getPath("userData"), "settings.json");
}

function loadSettings() {
  try {
    settings = { ...DEFAULTS, ...JSON.parse(fs.readFileSync(settingsFile(), "utf8")) };
  } catch {
    settings = { ...DEFAULTS };
  }
}

function saveSettings() {
  fs.writeFileSync(settingsFile(), JSON.stringify(settings, null, 2));
}

function pageUrl(view) {
  const fileName = view === "overlay" ? "overlay.html" : "index.html";
  if (isDev) return `${process.env.VITE_DEV_SERVER_URL}/${fileName}`;
  return `file://${path.join(__dirname, "..", "dist", fileName).replace(/\\/g, "/")}`;
}

function overlayBoundsFor(display) {
  return {
    x: Math.round(display.bounds.x + (display.bounds.width - OVERLAY_SIZE) / 2),
    y: Math.round(display.bounds.y + (display.bounds.height - OVERLAY_SIZE) / 2),
    width: OVERLAY_SIZE,
    height: OVERLAY_SIZE,
  };
}

function createOverlay(display) {
  const overlay = new BrowserWindow({
    ...overlayBoundsFor(display),
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",
    alwaysOnTop: true,
    focusable: false,
    skipTaskbar: true,
    hasShadow: false,
    resizable: false,
    movable: false,
    show: false,
    webPreferences: { preload: preloadPath, contextIsolation: true, sandbox: true },
  });

  overlay.setMenuBarVisibility(false);
  overlay.setBackgroundColor("#00000000");
  overlay.setIgnoreMouseEvents(true, { forward: true });
  overlay.setAlwaysOnTop(true, "screen-saver");
  overlay.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  overlay.loadURL(pageUrl("overlay"));
  overlay.once("ready-to-show", () => {
    if (!bootstrapping && overlayAllowed && settings.enabled) overlay.showInactive();
    else overlay.hide();
  });
  overlay.on("closed", () => overlayWindows.delete(display.id));
  overlayWindows.set(display.id, overlay);
}

function closeOverlays() {
  const windows = [...overlayWindows.values()];
  overlayWindows.clear();
  for (const overlay of windows) {
    if (!overlay.isDestroyed()) overlay.close();
  }
}

function listRunningGames() {
  return new Promise((resolve) => {
    execFile("tasklist", ["/FO", "CSV", "/NH"], { windowsHide: true, timeout: 5000 }, (error, stdout) => {
      if (error || !stdout) {
        resolve(null);
        return;
      }
      const found = new Set();
      for (const line of String(stdout).replace(/^\uFEFF/, "").split(/\r?\n/)) {
        const match = /^"([^"]+)"/.exec(line);
        if (!match) continue;
        const name = match[1].toLowerCase();
        if (GAME_IMAGES.includes(name)) found.add(name);
      }
      resolve(found);
    });
  });
}

function setOverlayAllowed(allowed) {
  if (allowed === overlayAllowed) return;
  overlayAllowed = allowed;
  if (!allowed) {
    closeOverlays();
    return;
  }
  syncOverlays();
  applyEnabledState();
}

async function pollGames() {
  if (pollInFlight || isQuitting || process.platform !== "win32") return;
  pollInFlight = true;
  try {
    const running = await listRunningGames();
    if (!running) return;
    const inGame = running.size > 0;
    if (!inGame) {
      gameSince = 0;
      setOverlayAllowed(false);
      return;
    }
    if (!gameSince) gameSince = Date.now();
    if (Date.now() - gameSince >= GAME_SETTLE_MS) setOverlayAllowed(true);
  } finally {
    pollInFlight = false;
  }
}

function startGameWatch() {
  if (process.platform !== "win32") {
    overlayAllowed = true;
    return;
  }
  if (pollTimer) return;
  pollGames();
  pollTimer = setInterval(pollGames, GAME_POLL_MS);
}

function syncOverlays() {
  if (!overlayAllowed) {
    closeOverlays();
    return;
  }
  const displays = screen.getAllDisplays();
  const activeIds = new Set(displays.map((display) => display.id));

  for (const [id, overlay] of overlayWindows) {
    if (!activeIds.has(id)) overlay.close();
  }

  for (const display of displays) {
    const existing = overlayWindows.get(display.id);
    if (existing && !existing.isDestroyed()) existing.setBounds(overlayBoundsFor(display));
    else createOverlay(display);
  }
}

function broadcastSettings() {
  for (const overlay of overlayWindows.values()) {
    if (!overlay.isDestroyed()) overlay.webContents.send("settings:changed", settings);
  }
  if (settingsWindow && !settingsWindow.isDestroyed()) {
    settingsWindow.webContents.send("settings:changed", settings);
  }
}

function applyEnabledState() {
  for (const overlay of overlayWindows.values()) {
    if (overlay.isDestroyed()) continue;
    if (bootstrapping || !overlayAllowed) {
      overlay.hide();
      continue;
    }
    if (settings.enabled) overlay.showInactive();
    else overlay.hide();
  }
}

function registerHotkey() {
  globalShortcut.unregisterAll();
  if (!settings.hotkey) return true;
  const registered = globalShortcut.register(settings.hotkey, () => {
    settings.enabled = !settings.enabled;
    saveSettings();
    applyEnabledState();
    broadcastSettings();
  });
  return registered;
}

function quitApp() {
  isQuitting = true;
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = undefined;
  }
  if (tray) {
    tray.destroy();
    tray = undefined;
  }
  closeOverlays();
  if (splashWindow && !splashWindow.isDestroyed()) splashWindow.close();
  if (settingsWindow && !settingsWindow.isDestroyed()) settingsWindow.close();
  app.quit();
}

function showSettingsWindow() {
  if (!settingsWindow || settingsWindow.isDestroyed()) {
    createSettingsWindow();
    settingsWindow.once("ready-to-show", () => {
      if (!settingsWindow || settingsWindow.isDestroyed()) return;
      settingsWindow.setSkipTaskbar(false);
      settingsWindow.show();
      settingsWindow.focus();
    });
    return;
  }
  settingsWindow.setSkipTaskbar(false);
  if (settingsWindow.isMinimized()) settingsWindow.restore();
  settingsWindow.show();
  settingsWindow.focus();
}

function hideToTray() {
  if (!settingsWindow || settingsWindow.isDestroyed()) return;
  settingsWindow.setSkipTaskbar(true);
  settingsWindow.hide();
}

function createTray() {
  if (tray) return;
  try {
    tray = new Tray(appIconPath);
  } catch (error) {
    console.error("Tray icon could not be created:", error);
    tray = undefined;
    return;
  }
  tray.setToolTip("Dijital Crosshair");
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: "Aç", click: () => showSettingsWindow() },
    { type: "separator" },
    { label: "Kapat", click: () => quitApp() },
  ]));
  tray.on("double-click", () => showSettingsWindow());
  tray.on("click", () => showSettingsWindow());
}

function createSplashWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const splashW = 520;
  const splashH = 640;

  splashWindow = new BrowserWindow({
    width: splashW,
    height: splashH,
    x: Math.round((width - splashW) / 2),
    y: Math.round((height - splashH) / 2),
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",
    resizable: false,
    movable: false,
    maximizable: false,
    minimizable: false,
    fullscreenable: false,
    skipTaskbar: false,
    alwaysOnTop: true,
    hasShadow: false,
    show: false,
    icon: appIconPath,
    title: "Dijital Crosshair",
    webPreferences: {
      contextIsolation: true,
      sandbox: true,
      nodeIntegration: false,
    },
  });

  splashWindow.setMenuBarVisibility(false);
  splashWindow.loadFile(splashHtmlPath);
  splashWindow.once("ready-to-show", () => {
    if (splashWindow && !splashWindow.isDestroyed()) splashWindow.show();
  });
  splashWindow.on("closed", () => {
    splashWindow = undefined;
  });
}

async function revealApp() {
  if (splashWindow && !splashWindow.isDestroyed()) {
    try {
      await splashWindow.webContents.executeJavaScript("window.splashApi && window.splashApi.setReady()");
    } catch {
      /* splash may already be gone */
    }
    await delay(140);
    try {
      await splashWindow.webContents.executeJavaScript("window.splashApi && window.splashApi.fadeOut()");
    } catch {
      /* ignore */
    }
    await delay(SPLASH_FADE_MS);
  }

  bootstrapping = false;

  if (settingsWindow && !settingsWindow.isDestroyed()) {
    settingsWindow.show();
    settingsWindow.focus();
  }

  applyEnabledState();

  if (splashWindow && !splashWindow.isDestroyed()) {
    splashWindow.close();
  }
}

function createSettingsWindow() {
  const workArea = screen.getPrimaryDisplay().workAreaSize;
  settingsWindow = new BrowserWindow({
    width: Math.min(1720, Math.round(workArea.width * 0.92)),
    height: Math.min(940, Math.round(workArea.height * 0.92)),
    minWidth: 1180,
    minHeight: 700,
    backgroundColor: "#07080b",
    title: "Dijital Crosshair",
    icon: appIconPath,
    show: false,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: { preload: preloadPath, contextIsolation: true, sandbox: true },
  });
  settingsWindow.loadURL(pageUrl("settings"));
  settingsWindow.on("maximize", () => {
    if (!settingsWindow?.isDestroyed()) settingsWindow.webContents.send("window:maximized", true);
  });
  settingsWindow.on("unmaximize", () => {
    if (!settingsWindow?.isDestroyed()) settingsWindow.webContents.send("window:maximized", false);
  });
  settingsWindow.on("close", (event) => {
    if (isQuitting) return;
    event.preventDefault();
    hideToTray();
  });
  settingsWindow.on("closed", () => {
    settingsWindow = undefined;
  });
}

function waitForWindowReady(win) {
  return new Promise((resolve) => {
    if (!win || win.isDestroyed()) {
      resolve();
      return;
    }
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    win.once("ready-to-show", done);
    win.webContents.once("did-finish-load", done);
    setTimeout(done, 5000);
  });
}

async function bootstrap() {
  // Açılış ekranı anında görünür; ana pencere ve overlay'ler arka planda aynı anda hazırlanır.
  createSplashWindow();
  loadSettings();
  createSettingsWindow();
  startGameWatch();
  if (overlayAllowed) syncOverlays();
  createTray();
  registerHotkey();

  // Windows ayarı yazmak yavaş olabilir; açılışı bekletmesin.
  setImmediate(() => {
    try {
      app.setLoginItemSettings({ openAtLogin: settings.launchAtLogin });
    } catch {
      /* yok say */
    }
  });

  await Promise.all([waitForWindowReady(settingsWindow), delay(SPLASH_MIN_MS)]);
  await revealApp();
}

// Program zaten açıksa (ör. tepsideyken) ikinci kopya başlatma, mevcut pencereyi öne getir.
const gotSingleInstanceLock = app.requestSingleInstanceLock();
if (!gotSingleInstanceLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (bootstrapping) return;
    showSettingsWindow();
  });
}

if (gotSingleInstanceLock) app.whenReady().then(() => {
  if (process.platform === "win32") {
    app.setAppUserModelId("com.cihatcros.overlay");
  }

  bootstrap().catch((error) => {
    console.error("Bootstrap failed:", error);
    bootstrapping = false;
    createTray();
    if (!settingsWindow) createSettingsWindow();
    if (settingsWindow && !settingsWindow.isDestroyed()) settingsWindow.show();
    startGameWatch();
    if (overlayAllowed) syncOverlays();
    registerHotkey();
    applyEnabledState();
    if (splashWindow && !splashWindow.isDestroyed()) splashWindow.close();
  });

  screen.on("display-added", syncOverlays);
  screen.on("display-removed", syncOverlays);
  screen.on("display-metrics-changed", syncOverlays);

  app.on("activate", () => {
    showSettingsWindow();
  });
});

ipcMain.handle("settings:get", () => settings);
ipcMain.handle("window:minimize", () => {
  if (settingsWindow && !settingsWindow.isDestroyed()) settingsWindow.minimize();
});
ipcMain.handle("window:maximize", () => {
  if (!settingsWindow || settingsWindow.isDestroyed()) return { maximized: false };
  if (settingsWindow.isMaximized()) settingsWindow.unmaximize();
  else settingsWindow.maximize();
  return { maximized: settingsWindow.isMaximized() };
});
ipcMain.handle("window:isMaximized", () => {
  if (!settingsWindow || settingsWindow.isDestroyed()) return false;
  return settingsWindow.isMaximized();
});
ipcMain.handle("window:close", () => {
  hideToTray();
});
ipcMain.handle("window:hideToTray", () => {
  hideToTray();
});
ipcMain.handle("settings:update", (_, patch) => {
  const nextSettings = { ...settings, ...patch };
  if (patch.hotkey && patch.hotkey !== settings.hotkey) {
    const prior = settings.hotkey;
    settings = nextSettings;
    if (!registerHotkey()) {
      settings.hotkey = prior;
      registerHotkey();
      return { ok: false, error: "Bu kısayol başka bir uygulama tarafından kullanılıyor." };
    }
  } else {
    settings = nextSettings;
  }
  if (Object.hasOwn(patch, "launchAtLogin")) {
    app.setLoginItemSettings({ openAtLogin: settings.launchAtLogin });
  }
  saveSettings();
  applyEnabledState();
  broadcastSettings();
  return { ok: true, settings };
});

ipcMain.handle("app:quit", () => {
  quitApp();
});

ipcMain.handle("shell:openExternal", async (_event, url) => {
  if (typeof url !== "string" || !/^https?:\/\//i.test(url)) {
    return { ok: false };
  }
  await shell.openExternal(url);
  return { ok: true };
});

app.on("window-all-closed", (event) => {
  if (!isQuitting) event.preventDefault();
});

app.on("before-quit", () => {
  isQuitting = true;
});

app.on("will-quit", () => {
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = undefined;
  }
  globalShortcut.unregisterAll();
  if (tray) {
    tray.destroy();
    tray = undefined;
  }
});
