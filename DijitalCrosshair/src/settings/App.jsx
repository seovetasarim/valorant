import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { api, DEFAULT_SETTINGS } from '../lib/api.js'
import Icon from './Icons.jsx'
import {
  LIBRARY,
  GAMES,
  SHAPES,
  COLORS,
  SITE_URL,
  STUDIO_URL,
  PRESET_BY_ID,
  colorFamily,
  isKing,
  isPlayerPreset,
  isStreamer,
  popularOf,
  presetName,
  presetTag,
  presetToSettings,
} from './data.js'
import { CrosshairCard, Dropdown, Editor, HotkeyRecorder, Keys, Stage, Switch } from './ui.jsx'
import logo from '../assets/logo.webp'
import operator1 from '../assets/operator-1.webp'
import operator2 from '../assets/operator-2.webp'
import operator3 from '../assets/operator-3.webp'

const GAME_ART = { valorant: operator1, cs2: operator2, fun: operator3 }

const GAME_TEXT = {
  valorant: 'Sadece Dijital Crosshair\'da olan 100 özel KING nişangahı ve pro oyuncuların en iyi Valorant ayarları. Tek tıkla uygula.',
  cs2: 'Sadece Dijital Crosshair\'da olan 100 özel KING nişangahı ve CS2 pro oyuncularının ayarları. Tek tıkla uygula.',
  fun: 'Sıradan nişangahlardan sıkıldıysan eğlenceli sembollerle oyununa renk kat, tek tıkla uygula.',
}

const TABS = [
  { id: 'home', label: 'Anasayfa', icon: 'home' },
  { id: 'crosshairs', label: 'Crosshairlar', icon: 'target' },
  { id: 'favorites', label: 'Favoriler', icon: 'star' },
  { id: 'guide', label: 'Rehber', icon: 'book' },
  { id: 'settings', label: 'Ayarlar', icon: 'gear' },
]

const GROUPS = [
  { id: 'all', label: 'Tümü', icon: 'grid' },
  { id: 'king', label: 'KING', icon: 'crown' },
  { id: 'popular', label: 'Popüler', icon: 'star' },
  { id: 'pro', label: 'Pro Oyuncu', icon: 'target' },
  { id: 'streamer', label: 'Yayıncı', icon: 'broadcast' },
]

const SWATCH_OF = {
  white: '#ffffff',
  green: '#22ff66',
  cyan: '#00ffff',
  red: '#ff3344',
  yellow: '#ffee00',
  pink: '#ff4fd8',
  orange: '#ff9f1c',
  blue: '#4d8dff',
  purple: '#b388ff',
  black: '#111111',
}

/* ================================================================ chrome */

function TopBar({ tab, onTab }) {
  const [maximized, setMaximized] = useState(false)
  useEffect(() => {
    api.isMaximized().then(setMaximized)
    return api.onMaximizedChanged(setMaximized)
  }, [])
  return (
    <header className="topbar">
      <nav className="tabs" aria-label="Sayfalar">
        {TABS.map((t) => (
          <button key={t.id} type="button" className={`tab ${tab === t.id ? 'is-active' : ''}`} onClick={() => onTab(t.id)}>
            <Icon name={t.icon} size={20} />
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
      <div className="winctl">
        <button type="button" title="Küçült" onClick={() => api.minimize()}>
          <Icon name="min" size={17} />
        </button>
        <button type="button" title={maximized ? 'Geri al' : 'Büyüt'} onClick={() => api.maximize().then((r) => setMaximized(Boolean(r?.maximized)))}>
          <Icon name={maximized ? 'restore' : 'max'} size={15} />
        </button>
        <button type="button" className="winctl__close" title="Kapat" onClick={() => api.closeWindow()}>
          <Icon name="close" size={17} />
        </button>
      </div>
    </header>
  )
}

function SideItem({ icon, label, active, onClick, expandable, expanded, count, filled }) {
  return (
    <button type="button" className={`side-item ${active ? 'is-active' : ''}`} onClick={onClick} aria-expanded={expandable ? expanded : undefined}>
      <Icon name={icon} size={22} filled={filled} />
      <span className="side-item__label">{label}</span>
      {count != null && <span className="side-item__count">{count}</span>}
      {expandable && <Icon name="chevron" size={17} className={`side-item__chev ${expanded ? 'is-open' : ''}`} />}
    </button>
  )
}

function Sidebar({ view, go, game, counts }) {
  const [open, setOpen] = useState({ shapes: false, collections: true })
  const onCross = view.tab === 'crosshairs'
  const is = (group) => onCross && view.group === group && view.shape === 'all'
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src={logo} alt="" className="brand__logo" draggable="false" />
        <div className="brand__text">
          <span className="brand__name">DİJİTAL</span>
          <span className="brand__sub" lang="en">Crosshair Collection</span>
        </div>
      </div>

      <nav className="side-nav">
        <SideItem icon="sparkle" label="Tüm Crosshairlar" active={is('all')} onClick={() => go({ tab: 'crosshairs', group: 'all', shape: 'all' })} />
        <SideItem icon="crown" label="KING Serisi" active={is('king')} onClick={() => go({ tab: 'crosshairs', group: 'king', shape: 'all' })} />
        <SideItem icon="target" label="Profesyonel Ayarlar" active={is('pro')} onClick={() => go({ tab: 'crosshairs', group: 'pro', shape: 'all' })} />
        <SideItem icon="broadcast" label="Yayıncı Crosshairları" active={is('streamer')} onClick={() => go({ tab: 'crosshairs', group: 'streamer', shape: 'all' })} />

        <SideItem icon="shapes" label="Şekle Göre" expandable expanded={open.shapes} onClick={() => setOpen((o) => ({ ...o, shapes: !o.shapes }))} />
        {open.shapes && (
          <div className="side-sub">
            {SHAPES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={onCross && view.shape === s.id ? 'is-active' : ''}
                onClick={() => go({ tab: 'crosshairs', group: 'all', shape: s.id })}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        <SideItem icon="layers" label="Koleksiyonlar" expandable expanded={open.collections} onClick={() => setOpen((o) => ({ ...o, collections: !o.collections }))} />
        {open.collections && (
          <div className="side-sub">
            {Object.entries(GAMES).map(([id, g]) => (
              <button key={id} type="button" className={game === id ? 'is-active' : ''} onClick={() => go({ tab: 'crosshairs', game: id, group: 'all', shape: 'all' })}>
                {g.label}
                <span>{counts[id]}</span>
              </button>
            ))}
          </div>
        )}

        <span className="side-divider" />

        <SideItem icon="fire" label="Popüler" active={is('popular')} onClick={() => go({ tab: 'crosshairs', group: 'popular', shape: 'all' })} />
        <SideItem icon="bars" label="En Çok Kullanılan" active={is('most')} onClick={() => go({ tab: 'crosshairs', group: 'most', shape: 'all' })} />
      </nav>

      <div className="side-art" aria-hidden="true">
        <img src={logo} alt="" className="side-art__logo" draggable="false" />
      </div>
    </aside>
  )
}

function Hero({ eyebrow, title, text, art, stats, children }) {
  return (
    <section className="hero">
      <div className="hero__scene" aria-hidden="true" />
      <div className="hero__slash hero__slash--a" aria-hidden="true" />
      <div className="hero__slash hero__slash--b" aria-hidden="true" />
      <div className="hero__slash hero__slash--c" aria-hidden="true" />
      {art && <img key={art} className="hero__art" src={art} alt="" draggable="false" />}
      <div className="hero__copy">
        <span className="hero__eyebrow">{eyebrow}</span>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__text">{text}</p>
        <span className="hero__bar" />
        {children}
      </div>
      {stats && (
        <div className="hero__stats">
          {stats.map((s, i) => (
            <div key={s.label} className="hero__stat">
              {i > 0 && <span className="hero__stat-sep" />}
              {s.icon && <Icon name={s.icon} size={22} className="hero__stat-icon" />}
              <div>
                <b>{s.value}</b>
                <small>{s.label}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

/* ============================================================== library */

function useColumns(ref, min = 152, gap = 12) {
  const [cols, setCols] = useState(8)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      setCols(Math.max(2, Math.floor((w + gap) / (min + gap))))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref, min, gap])
  return cols
}

function Pagination({ page, pages, onPage }) {
  if (pages <= 1) return null
  const span = 10
  const start = Math.max(0, Math.min(page - Math.floor(span / 2), pages - span))
  const nums = Array.from({ length: Math.min(span, pages) }, (_, i) => start + i)
  return (
    <nav className="pager" aria-label="Sayfalar">
      <button type="button" className="pager__nav" disabled={page === 0} onClick={() => onPage(page - 1)} aria-label="Önceki">
        <Icon name="left" size={18} />
      </button>
      {nums.map((n) => (
        <button key={n} type="button" className={n === page ? 'is-active' : ''} onClick={() => onPage(n)}>
          {n + 1}
        </button>
      ))}
      <button type="button" className="pager__nav" disabled={page >= pages - 1} onClick={() => onPage(page + 1)} aria-label="Sonraki">
        <Icon name="right" size={18} />
      </button>
    </nav>
  )
}

function CardGrid({ items, settings, favSet, onApply, onFavorite, cols, gridRef }) {
  return (
    <div className="xgrid" ref={gridRef} style={{ '--cols': cols }}>
      {items.map((p, i) => {
        const active = settings.presetId === p.id
        return (
          <CrosshairCard
            key={p.id}
            index={i}
            preset={p}
            shown={active ? settings : p.settings}
            active={active}
            favorite={favSet.has(p.id)}
            onApply={() => onApply(p)}
            onFavorite={() => onFavorite(p.id)}
          />
        )
      })}
    </div>
  )
}

function Library({ source, view, setView, settings, favSet, onApply, onFavorite, game, emptyText }) {
  const gridRef = useRef(null)
  const cols = useColumns(gridRef)
  const pageSize = cols * 3

  const filtered = useMemo(() => {
    let list = source
    if (view.group === 'popular') {
      if (game) {
        const pop = new Set(popularOf(game).map((p) => p.id))
        list = list.filter((p) => pop.has(p.id))
      } else list = list.filter(isPlayerPreset)
    }
    if (view.group === 'king') list = list.filter(isKing)
    if (view.group === 'pro') list = list.filter(isPlayerPreset)
    if (view.group === 'streamer') list = list.filter(isStreamer)
    if (view.group === 'most') {
      const usage = settings.usage ?? {}
      list = list.filter((p) => usage[p.id]).sort((a, b) => usage[b.id] - usage[a.id])
    }
    if (view.shape !== 'all') list = list.filter((p) => p.settings.shape === view.shape)
    if (view.color !== 'all') list = list.filter((p) => p.settings.shape !== 'fun' && colorFamily(p.settings.color) === view.color)
    const q = view.query.trim().toLocaleLowerCase('tr')
    if (q) list = list.filter((p) => presetName(p).toLocaleLowerCase('tr').includes(q) || (p.shareCode ?? '').toLowerCase().includes(q))
    return list
  }, [source, view, game, settings.usage])

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const page = Math.min(view.page, pages - 1)
  const items = filtered.slice(page * pageSize, (page + 1) * pageSize)

  const colorOptions = useMemo(() => {
    const present = new Set(source.filter((p) => p.settings.shape !== 'fun').map((p) => colorFamily(p.settings.color)))
    return [{ id: 'all', label: 'Tümü' }, ...COLORS.filter((c) => present.has(c.id)).map((c) => ({ ...c, swatch: SWATCH_OF[c.id] }))]
  }, [source])
  const shapeOptions = useMemo(() => {
    const present = new Set(source.map((p) => p.settings.shape))
    return [{ id: 'all', label: 'Tümü' }, ...SHAPES.filter((s) => present.has(s.id))]
  }, [source])

  const set = (patch) => setView((v) => ({ ...v, page: 0, ...patch }))

  return (
    <>
      <div className="filters">
        {GROUPS.map((g) => (
          <button key={g.id} type="button" className={`fbtn ${view.group === g.id ? 'is-active' : ''}`} onClick={() => set({ group: g.id })}>
            <Icon name={g.icon} size={19} />
            {g.id === 'all' ? `Tümü (${source.length})` : g.label}
          </button>
        ))}
        <Dropdown label="Renk" value={view.color} options={colorOptions} onChange={(color) => set({ color })} />
        <Dropdown label="Tür" value={view.shape} options={shapeOptions} onChange={(shape) => set({ shape })} />
        <label className="search">
          <Icon name="search" size={19} />
          <input type="search" placeholder="Crosshair ara..." value={view.query} onChange={(e) => set({ query: e.target.value })} />
          {view.query && (
            <button type="button" onClick={() => set({ query: '' })} title="Temizle">
              <Icon name="close" size={14} />
            </button>
          )}
        </label>
      </div>

      {filtered.length === 0 ? (
        <>
          <div ref={gridRef} />
          <div className="empty">
            <Icon name={view.group === 'most' ? 'bars' : 'search'} size={30} />
            <p>{view.group === 'most' && !view.query ? 'Henüz kullanım yok' : emptyText ?? 'Sonuç bulunamadı'}</p>
            <span>
              {view.group === 'most' && !view.query
                ? 'Uyguladığın nişangahlar burada en çok kullanılandan aza doğru sıralanır.'
                : 'Farklı bir filtre ya da arama dene.'}
            </span>
          </div>
        </>
      ) : (
        <CardGrid items={items} settings={settings} favSet={favSet} onApply={onApply} onFavorite={onFavorite} cols={cols} gridRef={gridRef} />
      )}

      <Pagination page={page} pages={pages} onPage={(n) => setView((v) => ({ ...v, page: n }))} />
    </>
  )
}

/* ================================================================ pages */

function HomePage({ settings, update, activePreset, onApply, onFavorite, favSet, onCopy, onRandom, go, game }) {
  const rowRef = useRef(null)
  const cols = useColumns(rowRef)
  const recent = (settings.recent ?? []).map((id) => PRESET_BY_ID.get(id)).filter(Boolean).slice(0, cols)
  const popular = popularOf(game).slice(0, cols)
  const [shape, color] = presetTag(settings)

  return (
    <>
      <Hero
        eyebrow="Hoş geldin"
        title="DİJİTAL CROSSHAIR"
        text="Nişangahını seç, istediğin gibi düzenle ve oyunun üzerinde anında kullan. Overlay'i kısayolla dilediğin an açıp kapatabilirsin."
        art={operator2}
        stats={[
          { label: 'Nişangah', value: LIBRARY.valorant.length + LIBRARY.cs2.length + LIBRARY.fun.length },
          { label: 'Favori', value: (settings.favorites ?? []).length, icon: 'star' },
        ]}
      />

      <div className="home-grid">
        <section className="panel panel--active">
          <header className="panel__head">
            <h2>Aktif Nişangah</h2>
            <span className={`status ${settings.enabled ? 'is-on' : ''}`}>
              <i /> {settings.enabled ? 'Overlay açık' : 'Overlay kapalı'}
            </span>
          </header>
          <Stage settings={settings} height={250} />
          <div className="active-info">
            <div>
              <span className="active-info__tag" lang="en">
                {shape} · {color}
              </span>
              <h3 lang="en">{activePreset ? presetName(activePreset) : 'ÖZEL AYAR'}</h3>
            </div>
            <div className="active-info__btns">
              {activePreset?.shareCode && (
                <button type="button" className="btn btn--ghost" onClick={() => onCopy(activePreset.shareCode)}>
                  <Icon name="copy" size={16} /> Kodu kopyala
                </button>
              )}
              <button type="button" className="btn btn--ghost" onClick={onRandom}>
                <Icon name="shuffle" size={16} /> Rastgele
              </button>
              <button type="button" className="btn" onClick={() => go({ tab: 'settings' })}>
                <Icon name="edit" size={16} /> Düzenle
              </button>
            </div>
          </div>
        </section>

        <div className="home-side">
          <section className={`panel power ${settings.enabled ? 'is-on' : ''}`}>
            <div className="power__icon">
              <Icon name="power" size={24} />
            </div>
            <div className="power__text">
              <span className="power__title">Overlay</span>
              <span className="power__sub">
                Aç / kapat: <Keys hotkey={settings.hotkey} />
              </span>
            </div>
            <Switch checked={settings.enabled} tone="green" label="Overlay" onChange={(v) => update({ enabled: v })} />
          </section>
          <section className="panel">
            <header className="panel__head">
              <h2>Hızlı Ayar</h2>
            </header>
            <Editor settings={settings} update={update} compact />
          </section>
        </div>
      </div>

      <div className="section-head">
        <h2>Son Kullanılanlar</h2>
        <button type="button" className="link-btn" onClick={() => go({ tab: 'crosshairs', group: 'most', shape: 'all' })}>
          En çok kullanılanlar <Icon name="right" size={15} />
        </button>
      </div>
      {recent.length ? (
        <CardGrid items={recent} settings={settings} favSet={favSet} onApply={onApply} onFavorite={onFavorite} cols={cols} gridRef={rowRef} />
      ) : (
        <>
          <div ref={rowRef} />
          <p className="muted-line">Henüz bir nişangah uygulamadın. Aşağıdaki popüler seçeneklerden biriyle başla.</p>
        </>
      )}

      <div className="section-head">
        <h2>Popüler {GAMES[game].label} Nişangahları</h2>
        <button type="button" className="link-btn" onClick={() => go({ tab: 'crosshairs', group: 'popular', shape: 'all' })}>
          Tümünü gör <Icon name="right" size={15} />
        </button>
      </div>
      <CardGrid items={popular} settings={settings} favSet={favSet} onApply={onApply} onFavorite={onFavorite} cols={cols} />
    </>
  )
}

const GUIDE = [
  {
    title: 'Nişangahını seç',
    text: 'Crosshairlar sayfasından bir kart seç ve "Uygula"ya bas. Nişangah, Valorant veya CS2 açıldıktan kısa süre sonra ekranın ortasında belirir. Oyun açılırken kapalı kalır.',
    icon: 'target',
  },
  {
    title: 'Kısayolla aç / kapat',
    text: "Oyundayken overlay'i kısayol tuşuyla gizleyip gösterebilirsin. Kısayolu Ayarlar sayfasından değiştirebilirsin.",
    icon: 'keyboard',
  },
  {
    title: 'Pencereli tam ekran kullan',
    text: 'Overlay\'in oyunun üzerinde görünmesi için oyunun ekran modunu "Pencereli tam ekran" (Windowed Fullscreen) yap.',
    icon: 'info',
  },
  {
    title: 'Kodu oyuna aktar',
    text: "Pro oyuncu kartlarındaki kodu Anasayfa'dan kopyala. Valorant'ta Ayarlar → Nişangah → Profili içe aktar'a yapıştır.",
    icon: 'copy',
  },
  {
    title: 'İstediğin gibi düzenle',
    text: 'Renk, boyut, uzunluk, kalınlık, boşluk ve opaklığı canlı önizleme ile değiştir. Ayarların otomatik kaydedilir.',
    icon: 'edit',
  },
  {
    title: 'Favorilerini topla',
    text: 'Beğendiğin kartın kalbine bas, hepsi Favoriler sayfasında seni beklesin.',
    icon: 'heart',
  },
]

function GuidePage() {
  return (
    <>
      <Hero eyebrow="Rehber" title="NASIL KULLANILIR" text="Dijital Crosshair'i birkaç adımda kur, oyunda kusursuz bir nişangahla oyna." art={operator3} />
      <div className="guide">
        {GUIDE.map((g, i) => (
          <article key={g.title} className="guide__card">
            <span className="guide__num">{String(i + 1).padStart(2, '0')}</span>
            <Icon name={g.icon} size={24} className="guide__icon" />
            <h3>{g.title}</h3>
            <p>{g.text}</p>
          </article>
        ))}
      </div>
      <div className="callout">
        <Icon name="info" size={20} />
        <p>
          Uygulama oyun dosyalarına dokunmaz ve oyuna enjekte olmaz; yalnızca ekranın üzerinde şeffaf bir katman olarak çalışır. Daha fazla nişangah kodu ve rehber için{' '}
          <button type="button" className="link-btn link-btn--inline" onClick={() => api.openExternal(SITE_URL)}>
            valocross.com
          </button>
          'u ziyaret et.
        </p>
      </div>
    </>
  )
}

function SettingsPage({ settings, update, onReset }) {
  return (
    <>
      <Hero eyebrow="Ayarlar" title="NİŞANGAH VE UYGULAMA" text="Nişangahını ince ayarla, kısayolları ve başlangıç davranışını belirle." art={operator2} />
      <div className="settings-grid">
        <section className="panel">
          <header className="panel__head">
            <h2>Nişangah Düzenle</h2>
            <button type="button" className="link-btn" onClick={onReset}>
              <Icon name="reset" size={15} /> Sıfırla
            </button>
          </header>
          <Stage settings={settings} height={230} />
          <Editor settings={settings} update={update} />
        </section>

        <div className="settings-side">
          <section className={`panel power ${settings.enabled ? 'is-on' : ''}`}>
            <div className="power__icon">
              <Icon name="power" size={24} />
            </div>
            <div className="power__text">
              <span className="power__title">Overlay</span>
              <span className="power__sub">{settings.enabled ? 'Oyunda görünüyor' : 'Şu an gizli'}</span>
            </div>
            <Switch checked={settings.enabled} tone="green" label="Overlay" onChange={(v) => update({ enabled: v })} />
          </section>

          <section className="panel">
            <header className="panel__head">
              <h2>Uygulama</h2>
            </header>
            <div className="row row--stack">
              <div>
                <span className="row__title">Aç / kapat kısayolu</span>
                <span className="row__sub">Oyun içindeyken overlay'i gizleyip gösterir</span>
              </div>
              <HotkeyRecorder hotkey={settings.hotkey} onChange={(hotkey) => update({ hotkey })} />
            </div>
            <div className="row">
              <div>
                <span className="row__title">Windows ile başlat</span>
                <span className="row__sub">Bilgisayar açılınca tepside hazır bekler</span>
              </div>
              <Switch checked={Boolean(settings.launchAtLogin)} label="Windows ile başlat" onChange={(v) => update({ launchAtLogin: v })} />
            </div>
            <div className="btn-row">
              <button type="button" className="btn btn--ghost" onClick={() => api.hideToTray()}>
                <Icon name="tray" size={16} /> Tepsiye indir
              </button>
              <button type="button" className="btn btn--danger" onClick={() => api.quit()}>
                <Icon name="exit" size={16} /> Uygulamadan çık
              </button>
            </div>
          </section>

          <section className="panel about">
            <img src={logo} alt="" draggable="false" />
            <div>
              <b>Dijital Crosshair</b>
              <span>Sürüm 2.0.1</span>
              <div className="about__links">
                <button type="button" className="link-btn" onClick={() => api.openExternal(SITE_URL)}>
                  <Icon name="globe" size={15} /> valocross.com
                </button>
                <button type="button" className="link-btn" onClick={() => api.openExternal(STUDIO_URL)}>
                  <Icon name="globe" size={15} /> dijitalwebsite.com
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

/* ================================================================== app */

const INITIAL_VIEW = { tab: 'crosshairs', group: 'all', shape: 'all', color: 'all', query: '', page: 0 }

export default function App() {
  const [settings, setSettings] = useState({ ...DEFAULT_SETTINGS })
  const [game, setGame] = useState('valorant')
  const [view, setView] = useState(INITIAL_VIEW)
  const [favView, setFavView] = useState({ ...INITIAL_VIEW, tab: 'favorites' })
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(0)
  const mainRef = useRef(null)

  useEffect(() => {
    api.getSettings().then((s) => setSettings((p) => ({ ...p, ...s })))
    return api.onSettingsChanged((s) => setSettings((p) => ({ ...p, ...s })))
  }, [])

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 })
  }, [view.tab])

  const notify = useCallback((msg, kind = 'ok') => {
    clearTimeout(toastTimer.current)
    setToast({ msg, kind, id: Date.now() })
    toastTimer.current = setTimeout(() => setToast(null), 2400)
  }, [])

  const update = useCallback(
    async (patch) => {
      setSettings((p) => ({ ...p, ...patch }))
      const res = await api.updateSettings(patch)
      if (res?.ok && res.settings) setSettings((p) => ({ ...p, ...res.settings }))
      if (res && !res.ok) {
        setSettings({ ...DEFAULT_SETTINGS, ...(await api.getSettings()) })
        if (res.error) notify(res.error, 'error')
      }
    },
    [notify],
  )

  const favorites = useMemo(() => settings.favorites ?? [], [settings.favorites])
  const favSet = useMemo(() => new Set(favorites), [favorites])

  const applyPreset = useCallback(
    (p) => {
      const usage = { ...(settings.usage ?? {}) }
      usage[p.id] = (usage[p.id] ?? 0) + 1
      const recent = [p.id, ...(settings.recent ?? []).filter((id) => id !== p.id)].slice(0, 16)
      update({ ...presetToSettings(p), enabled: true, usage, recent })
      notify(`${presetName(p)} uygulandı`)
    },
    [settings.usage, settings.recent, update, notify],
  )

  const toggleFavorite = useCallback(
    (id) => {
      const had = favSet.has(id)
      update({ favorites: had ? favorites.filter((f) => f !== id) : [...favorites, id] })
      notify(had ? 'Favorilerden çıkarıldı' : 'Favorilere eklendi')
    },
    [favSet, favorites, update, notify],
  )

  const copyCode = useCallback(
    async (code) => {
      try {
        await navigator.clipboard.writeText(code)
        notify('Kod panoya kopyalandı')
      } catch {
        notify('Kopyalanamadı', 'error')
      }
    },
    [notify],
  )

  const go = useCallback((patch) => {
    if (patch.game) setGame(patch.game)
    const { game: _game, ...rest } = patch
    setView((v) => ({ ...v, page: 0, ...rest }))
  }, [])

  const randomPick = useCallback(() => {
    const pool = LIBRARY[game]
    applyPreset(pool[Math.floor(Math.random() * pool.length)])
  }, [game, applyPreset])

  function resetSettings() {
    const p = PRESET_BY_ID.get(settings.presetId)
    if (p) update(presetToSettings(p))
    else
      update({
        shape: 'cross',
        color: DEFAULT_SETTINGS.color,
        size: DEFAULT_SETTINGS.size,
        thickness: DEFAULT_SETTINGS.thickness,
        length: DEFAULT_SETTINGS.length,
        gap: DEFAULT_SETTINGS.gap,
        opacity: 1,
        outline: true,
        outerLength: 0,
      })
  }

  const counts = { valorant: LIBRARY.valorant.length, cs2: LIBRARY.cs2.length, fun: LIBRARY.fun.length }
  const activePreset = PRESET_BY_ID.get(settings.presetId)
  const favPresets = useMemo(() => favorites.map((id) => PRESET_BY_ID.get(id)).filter(Boolean), [favorites])

  const libProps = { settings, favSet, onApply: applyPreset, onFavorite: toggleFavorite }

  return (
    <div className="app">
      <Sidebar view={view} go={go} game={game} counts={counts} />
      <TopBar tab={view.tab} onTab={(tab) => go({ tab })} />

      <main className="main" ref={mainRef}>
        <div className="main__inner" key={view.tab}>
          {view.tab === 'crosshairs' && (
            <>
              <Hero
                eyebrow="Koleksiyon"
                title={GAMES[game].title.toLocaleUpperCase('tr')}
                text={GAME_TEXT[game]}
                art={GAME_ART[game]}
                stats={[
                  { label: 'Nişangah', value: counts[game] },
                  ...(game === 'fun' ? [] : [{ label: 'KING', value: LIBRARY[game].filter(isKing).length, icon: 'crown' }]),
                  { label: 'Favori', value: favorites.length, icon: 'star' },
                ]}
              />
              <Library source={LIBRARY[game]} view={view} setView={setView} game={game} {...libProps} />
            </>
          )}

          {view.tab === 'favorites' && (
            <>
              <Hero
                eyebrow="Koleksiyonum"
                title="FAVORİLERİM"
                text="Kalbe bastığın tüm nişangahlar burada. Valorant, CS2 ve eğlence koleksiyonlarından favorilerin tek yerde."
                art={operator3}
                stats={[{ label: 'Favori', value: favorites.length, icon: 'star' }]}
              />
              <Library source={favPresets} view={favView} setView={setFavView} {...libProps} emptyText="Henüz favorin yok" />
            </>
          )}

          {view.tab === 'home' && (
            <HomePage
              settings={settings}
              update={update}
              activePreset={activePreset}
              onApply={applyPreset}
              onFavorite={toggleFavorite}
              favSet={favSet}
              onCopy={copyCode}
              onRandom={randomPick}
              go={go}
              game={game}
            />
          )}

          {view.tab === 'guide' && <GuidePage />}
          {view.tab === 'settings' && <SettingsPage settings={settings} update={update} onReset={resetSettings} />}
        </div>
      </main>

      {toast && (
        <div key={toast.id} className={`toast toast--${toast.kind}`} role="status">
          <Icon name={toast.kind === 'error' ? 'close' : 'check'} size={16} />
          {toast.msg}
        </div>
      )}
    </div>
  )
}
