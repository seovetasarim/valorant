import { LIBRARY as BASE_LIBRARY, settingsKey } from '../lib/presets.js'
import { buildKingSeries } from '../lib/kingPresets.js'

/* KING Serisi her koleksiyonun en başında yer alır. */
const existingKeys = new Set([...BASE_LIBRARY.valorant, ...BASE_LIBRARY.cs2].map((p) => settingsKey(p.settings)))
export const KING = {
  valorant: buildKingSeries('valorant', existingKeys),
  cs2: buildKingSeries('cs2', existingKeys),
}
export const LIBRARY = {
  valorant: [...KING.valorant, ...BASE_LIBRARY.valorant],
  cs2: [...KING.cs2, ...BASE_LIBRARY.cs2],
  fun: BASE_LIBRARY.fun,
}

export const SITE_URL = 'https://www.valocross.com'
export const STUDIO_URL = 'https://www.dijitalwebsite.com'

export const GAMES = {
  valorant: { label: 'Valorant', title: 'Valorant Nişangah' },
  cs2: { label: 'CS2', title: 'CS2 Nişangah' },
  fun: { label: 'Eğlence', title: 'Eğlence Nişangah' },
}

export const SHAPES = [
  { id: 'cross', label: 'Artı', tag: 'Cross' },
  { id: 'cross-dot', label: 'Artı + Nokta', tag: 'Cross-Dot' },
  { id: 't-cross', label: 'T Şekli', tag: 'T-Cross' },
  { id: 'brackets', label: 'Köşeli', tag: 'Brackets' },
  { id: 'dot', label: 'Nokta', tag: 'Dot' },
  { id: 'circle', label: 'Daire', tag: 'Circle' },
]
export const SHAPE_BY_ID = Object.fromEntries(SHAPES.map((s) => [s.id, s]))

export const COLORS = [
  { id: 'white', label: 'Beyaz' },
  { id: 'green', label: 'Yeşil' },
  { id: 'cyan', label: 'Camgöbeği' },
  { id: 'red', label: 'Kırmızı' },
  { id: 'yellow', label: 'Sarı' },
  { id: 'pink', label: 'Pembe' },
  { id: 'orange', label: 'Turuncu' },
  { id: 'blue', label: 'Mavi' },
  { id: 'purple', label: 'Mor' },
  { id: 'black', label: 'Siyah' },
]
export const COLOR_LABEL = Object.fromEntries(COLORS.map((c) => [c.id, c.label]))

export const SWATCHES = ['#ff4655', '#00ff66', '#00ffff', '#ffffff', '#ffff00', '#ff00ff', '#ff9f1c', '#66a3ff']

/* Yayıncı / içerik üreticisi olarak bilinen isimler (kütüphanedeki profillerden). */
const STREAMERS = new Set(
  [
    'Shroud',
    'tarik',
    'Nadeshot',
    'Wardell',
    'Hiko',
    'Sinatraa',
    'ScreaM',
    'Mistic',
    'Boaster',
    'TenZ',
    's1mple',
    'olofmeister',
    'FalleN',
    'coldzera',
    'shox',
    'Snax',
  ].map((n) => n.toLowerCase()),
)

export function round(value, digits = 2) {
  const n = Number(Number(value).toFixed(digits))
  return Object.is(n, -0) ? 0 : n
}

function hexToHsl(hex) {
  const m = /^#?([0-9a-f]{6})/i.exec(hex ?? '')
  if (!m) return { h: 0, s: 0, l: 1 }
  const n = parseInt(m[1], 16)
  const r = ((n >> 16) & 255) / 255
  const g = ((n >> 8) & 255) / 255
  const b = (n & 255) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
  else if (max === g) h = (b - r) / d + 2
  else h = (r - g) / d + 4
  return { h: h * 60, s, l }
}

export function colorFamily(hex) {
  const { h, s, l } = hexToHsl(hex)
  if (l < 0.12) return 'black'
  if (s < 0.18 || l > 0.9) return 'white'
  if (h < 15 || h >= 345) return 'red'
  if (h < 40) return 'orange'
  if (h < 68) return 'yellow'
  if (h < 160) return 'green'
  if (h < 200) return 'cyan'
  if (h < 255) return 'blue'
  if (h < 290) return 'purple'
  return 'pink'
}

export function isPlayerPreset(p) {
  return p.game !== 'fun' && !p.king && !p.id.includes('-pro-')
}

export function isKing(p) {
  return Boolean(p.king)
}

export function isStreamer(p) {
  return isPlayerPreset(p) && STREAMERS.has((p.name ?? '').toLowerCase())
}

export function presetName(p) {
  if (p.game !== 'fun' && p.id.includes('-pro-')) {
    return `${p.game === 'cs2' ? 'CS' : 'VCT'} Profil ${p.id.split('-').pop()}`
  }
  return p.name ?? p.id
}

export function presetTag(settings) {
  if (settings.shape === 'fun') return ['Symbol', 'Custom']
  const shape = SHAPE_BY_ID[settings.shape]?.tag ?? settings.shape
  const fam = colorFamily(settings.color)
  return [shape, fam]
}

export const ALL_PRESETS = [...LIBRARY.valorant, ...LIBRARY.cs2, ...LIBRARY.fun]
export const PRESET_BY_ID = new Map(ALL_PRESETS.map((p) => [p.id, p]))

/* İlk 24 pro oyuncu profili listede en çok aranan isimler sırasıyla duruyor. */
export function popularOf(game) {
  const list = LIBRARY[game]
  if (game === 'fun') return list.slice(0, 24)
  return list.filter(isPlayerPreset).slice(0, 24)
}

export function presetToSettings(p) {
  const s = p.settings
  return {
    ...s,
    size: round(s.size),
    thickness: round(s.thickness),
    length: round(s.length),
    gap: round(s.gap),
    opacity: round(s.opacity, 3),
    outerLength: round(s.outerLength ?? 0),
    outerGap: round(s.outerGap ?? 0),
    outerThickness: round(s.outerThickness ?? 0),
    funSymbol: s.funSymbol,
    presetId: p.id,
  }
}

export function hotkeyParts(hotkey) {
  if (!hotkey) return ['Atanmadı']
  return hotkey.split('+').map((k) => (k === 'Control' || k === 'CommandOrControl' ? 'Ctrl' : k))
}

export function acceleratorFromEvent(e) {
  const code = e.code
  let key = null
  if (/^Key[A-Z]$/.test(code)) key = code.slice(3)
  else if (/^Digit\d$/.test(code)) key = code.slice(5)
  else if (/^F\d{1,2}$/.test(code)) key = code
  else if (/^Numpad\d$/.test(code)) key = `num${code.slice(6)}`
  else {
    const map = {
      Space: 'Space',
      Insert: 'Insert',
      Delete: 'Delete',
      Home: 'Home',
      End: 'End',
      PageUp: 'PageUp',
      PageDown: 'PageDown',
      ArrowUp: 'Up',
      ArrowDown: 'Down',
      ArrowLeft: 'Left',
      ArrowRight: 'Right',
    }
    key = map[code] ?? null
  }
  if (!key) return null
  const mods = []
  if (e.ctrlKey) mods.push('Control')
  if (e.altKey) mods.push('Alt')
  if (e.shiftKey) mods.push('Shift')
  if (!mods.length && !/^F\d/.test(key)) return null
  return [...mods, key].join('+')
}
