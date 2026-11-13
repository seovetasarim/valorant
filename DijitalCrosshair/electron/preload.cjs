const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("cihatcros", {
  getSettings: () => ipcRenderer.invoke("settings:get"),
  updateSettings: (patch) => ipcRenderer.invoke("settings:update", patch),
  minimize: () => ipcRenderer.invoke("window:minimize"),
  maximize: () => ipcRenderer.invoke("window:maximize"),
  isMaximized: () => ipcRenderer.invoke("window:isMaximized"),
  closeWindow: () => ipcRenderer.invoke("window:close"),
  hideToTray: () => ipcRenderer.invoke("window:hideToTray"),
  quit: () => ipcRenderer.invoke("app:quit"),
  openExternal: (url) => ipcRenderer.invoke("shell:openExternal", url),
  onSettingsChanged: (callback) => {
    const listener = (_, settings) => callback(settings);
    ipcRenderer.on("settings:changed", listener);
    return () => ipcRenderer.removeListener("settings:changed", listener);
  },
  onMaximizedChanged: (callback) => {
    const listener = (_, maximized) => callback(Boolean(maximized));
    ipcRenderer.on("window:maximized", listener);
    return () => ipcRenderer.removeListener("window:maximized", listener);
  },
});
