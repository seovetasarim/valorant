import { useEffect, useRef, useState } from 'react'
import Crosshair from '../components/Crosshair.js'
import Icon from './Icons.jsx'
import { SHAPES, SWATCHES, round, hotkeyParts, acceleratorFromEvent, presetName, presetTag } from './data.js'

/* ------------------------------------------------------------- logo */

export function LogoMark({ size = 44, className = '' }) {
  return (
    <svg className={`logo-mark ${className}`} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff5a68" />
          <stop offset="1" stopColor="#d81f35" />
        </linearGradient>
      </defs>
      <g fill="url(#lm-g)">
        <polygon points="19,1 29,1 26.5,17 21.5,17" />
        <polygon points="21.5,31 26.5,31 29,47 19,47" />
        <polygon points="1,19 17,21.5 17,26.5 1,29" />
        <polygon points="47,19 31,21.5 31,26.5 47,29" />
        <polygon points="24,19.5 28.5,24 24,28.5 19.5,24" />
      </g>
      <g fill="none" stroke="url(#lm-g)" strokeWidth="2.4">
        <path d="M8 13 13 8M35 8l5 5M40 35l-5 5M13 40l-5-5" />
      </g>
    </svg>
  )
}

export function Logo() {
  return (
    <div className="logo">
      <LogoMark size={46} />
      <div className="logo__text">
        <span className="logo__name">DİJİTAL</span>
        <span className="logo__sub">Crosshair Collection</span>
      </div>
    </div>
  )
}

/* -------------------------------------------------------- controls */

export function Switch({ checked, onChange, label, tone = 'red' }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className={`switch switch--${tone} ${checked ? 'is-on' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <span className="switch__knob" />
    </button>
  )
}

export function Slider({ label, min, max, step, value, digits = 2, percent = false, onChange }) {
  const p = ((value - min) / (max - min)) * 100
  const shown = percent ? `${Math.round(value * 100)}%` : String(round(value, digits))
  return (
    <label className="slider">
      <span className="slider__head">
        <span>{label}</span>
        <output>{shown}</output>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ '--p': `${Math.max(0, Math.min(100, p))}%` }}
        onChange={(e) => onChange(round(Number(e.target.value), digits))}
      />
    </label>
  )
}

export function Dropdown({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (!open) return undefined
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false)
    }
    window.addEventListener('mousedown', close)
    return () => window.removeEventListener('mousedown', close)
  }, [open])
  const current = options.find((o) => o.id === value)
  return (
    <div className={`dropdown ${open ? 'is-open' : ''}`} ref={ref}>
      <button type="button" className="dropdown__btn" onClick={() => setOpen((o) => !o)}>
        <span>
          <span className="dropdown__label">{label}:</span> {current?.label ?? 'Tümü'}
        </span>
        <Icon name="chevron" size={16} />
      </button>
      {open && (
        <ul className="dropdown__menu" role="listbox">
          {options.map((o) => (
            <li key={o.id}>
              <button
                type="button"
                className={o.id === value ? 'is-active' : ''}
                onClick={() => {
                  onChange(o.id)
                  setOpen(false)
                }}
              >
                {o.swatch && <i className="dropdown__dot" style={{ background: o.swatch }} />}
                {o.label}
                {o.id === value && <Icon name="check" size={14} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function HotkeyRecorder({ hotkey, onChange }) {
  const [recording, setRecording] = useState(false)
  useEffect(() => {
    if (!recording) return undefined
    function onKey(e) {
      e.preventDefault()
      if (e.key === 'Escape') {
        setRecording(false)
        return
      }
      const acc = acceleratorFromEvent(e)
      if (acc) {
        setRecording(false)
        onChange(acc)
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [recording, onChange])

  return (
    <button
      type="button"
      className={`hotkey ${recording ? 'is-recording' : ''}`}
      onClick={() => setRecording((r) => !r)}
      onBlur={() => setRecording(false)}
    >
      {recording ? (
        <span className="hotkey__hint">Tuş kombinasyonuna bas… (Esc iptal)</span>
      ) : (
        <Keys hotkey={hotkey} />
      )}
      <span className="hotkey__edit">{recording ? 'Dinleniyor' : 'Değiştir'}</span>
    </button>
  )
}

export function Keys({ hotkey }) {
  return (
    <span className="kbd-row">
      {hotkeyParts(hotkey).map((k) => (
        <kbd key={k}>{k}</kbd>
      ))}
    </span>
  )
}

/* ----------------------------------------------------------- cards */

export function CrosshairCard({ preset, shown, active, favorite, onApply, onFavorite, index = 0 }) {
  const [shape, color] = presetTag(shown)
  return (
    <article className={`xcard ${active ? 'is-active' : ''}`} style={{ '--bgx': `${(index * 37) % 100}%` }}>
      <div className="xcard__bg" aria-hidden="true" />
      <header className="xcard__top">
        <span className="xcard__tag" lang="en">
          {shape} <i>·</i> {color}
        </span>
        <button
          type="button"
          className={`xcard__fav ${favorite ? 'is-on' : ''}`}
          title={favorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
          onClick={onFavorite}
        >
          <Icon name="heart" size={17} filled={favorite} />
        </button>
      </header>
      <button type="button" className="xcard__preview" onClick={onApply} aria-label={`${presetName(preset)} uygula`}>
        <Crosshair settings={shown} displaySize={46} preview />
      </button>
      <h3 className={`xcard__name ${preset.king ? 'xcard__name--king' : ''}`} lang={preset.lang ?? 'en'} title={presetName(preset)}>
        {preset.king && <Icon name="crown" size={14} filled className="xcard__crown" />}
        <span>{presetName(preset)}</span>
      </h3>
      <button type="button" className="xcard__apply" onClick={onApply}>
        <Icon name={active ? 'check' : 'download'} size={14} />
        {active ? 'Uygulandı' : 'Uygula'}
      </button>
    </article>
  )
}

/* ----------------------------------------------------------- stage */

const STAGES = [
  { id: 'scene', label: 'Sahne' },
  { id: 'dark', label: 'Koyu' },
  { id: 'light', label: 'Açık' },
]

export function Stage({ settings, height = 240, zoom = 150 }) {
  const [stage, setStage] = useState('scene')
  const scale = Math.min(3, zoom / Math.max(settings.size, 1))
  return (
    <div className={`stage stage--${stage}`} style={{ height }}>
      <div className="stage__scope" aria-hidden="true" />
      <Crosshair settings={settings} displaySize={settings.size * scale} />
      <div className="stage__bar">
        <span className="stage__zoom">{round(scale, 1)}x önizleme</span>
        <div className="seg">
          {STAGES.map((s) => (
            <button key={s.id} type="button" className={stage === s.id ? 'is-active' : ''} onClick={() => setStage(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------- editor */

const SLIDERS = [
  { key: 'size', label: 'Boyut', min: 14, max: 80, step: 1, digits: 0 },
  { key: 'length', label: 'Uzunluk', min: 1, max: 30, step: 0.5 },
  { key: 'thickness', label: 'Kalınlık', min: 0.5, max: 8, step: 0.25 },
  { key: 'gap', label: 'Boşluk', min: 0, max: 18, step: 0.5 },
  { key: 'opacity', label: 'Opaklık', min: 0.1, max: 1, step: 0.05, percent: true },
]

export function Editor({ settings, update, compact = false }) {
  const isFun = settings.shape === 'fun'
  const sliders = SLIDERS.filter((d) => (!isFun || d.key === 'size' || d.key === 'opacity') && (!compact || d.key !== 'opacity'))
  return (
    <div className={`editor ${compact ? 'editor--compact' : ''}`}>
      {!isFun && !compact && (
        <div className="shape-grid">
          {SHAPES.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`shape-btn ${settings.shape === s.id ? 'is-active' : ''}`}
              title={s.label}
              onClick={() => update({ shape: s.id })}
            >
              <Crosshair
                settings={{ shape: s.id, color: 'currentColor', size: 22, thickness: 1.6, length: 4, gap: 2.5, opacity: 1, outline: false }}
                displaySize={24}
                preview
              />
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      )}

      <div className="swatches">
        {SWATCHES.map((c) => (
          <button
            key={c}
            type="button"
            className={`swatch ${settings.color?.toLowerCase() === c ? 'is-active' : ''}`}
            style={{ '--c': c }}
            title={c}
            onClick={() => update({ color: c })}
          />
        ))}
        <label className="swatch swatch--custom" title="Özel renk">
          <input type="color" value={settings.color} onChange={(e) => update({ color: e.target.value })} />
        </label>
      </div>

      {sliders.map((d) => (
        <Slider key={d.key} {...d} value={settings[d.key] ?? 0} onChange={(v) => update({ [d.key]: v })} />
      ))}

      {!isFun && !compact && (
        <div className="row">
          <div>
            <span className="row__title">Kenarlık</span>
            <span className="row__sub">Parlak zeminlerde görünürlüğü artırır</span>
          </div>
          <Switch checked={Boolean(settings.outline)} label="Kenarlık" onChange={(v) => update({ outline: v })} />
        </div>
      )}
    </div>
  )
}
