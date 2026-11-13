import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Crosshair from '../components/Crosshair.js'
import { api, DEFAULT_SETTINGS } from '../lib/api.js'
import './overlay.css'

function Overlay() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS)

  useEffect(() => {
    api.getSettings().then(setSettings)
    return api.onSettingsChanged(setSettings)
  }, [])

  return <main className="overlay-root">{settings.enabled && <Crosshair settings={settings} />}</main>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Overlay />
  </StrictMode>,
)
