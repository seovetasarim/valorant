/* Electron köprüsü (preload.cjs → window.cihatcros).
   Tarayıcıda (npm run dev) açılırsa sahte bir API devreye girer,
   böylece tasarım Electron olmadan da denenebilir. */

export const DEFAULT_SETTINGS = {
  enabled: true,
  shape: 'cross',
  color: '#ff4851',
  size: 26,
  thickness: 2,
  length: 10,
  gap: 5,
  opacity: 1,
  outline: true,
  hotkey: 'Control+Shift+X',
  launchAtLogin: false,
  favorites: [],
}

function createMockApi() {
  let settings = { ...DEFAULT_SETTINGS }
  try {
    const saved = localStorage.getItem('dc-mock-settings')
    if (saved) settings = { ...settings, ...JSON.parse(saved) }
  } catch {
    /* yok say */
  }
  const listeners = new Set()
  const emit = () => listeners.forEach((fn) => fn(settings))
  return {
    getSettings: async () => settings,
    updateSettings: async (patch) => {
      settings = { ...settings, ...patch }
      try {
        localStorage.setItem('dc-mock-settings', JSON.stringify(settings))
      } catch {
        /* yok say */
      }
      emit()
      return { ok: true, settings }
    },
    minimize: async () => {},
    maximize: async () => ({ maximized: false }),
    isMaximized: async () => false,
    closeWindow: async () => {},
    hideToTray: async () => {},
    quit: async () => {},
    openExternal: async (url) => {
      window.open(url, '_blank')
      return { ok: true }
    },
    onSettingsChanged: (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    onMaximizedChanged: () => () => {},
  }
}

export const api = typeof window !== 'undefined' && window.cihatcros ? window.cihatcros : createMockApi()
