/* KING Serisi: Dijital Crosshair'e özel, pro ölçülerinde 100 Valorant + 100 CS2 nişangahı.
   Liste sabit bir tohumla üretilir; her derlemede aynı nişangahlar aynı sırayla çıkar. */

const VALORANT_NAMES = `Ace Apex Arrow Blade Blaze Bolt Cobra Comet Dagger Delta Drift Echo Ember Falcon Fang Flare Flash Flux
Forge Frost Fury Glitch Halo Havoc Hawk Hex Hunter Ion Jade Karma Kite Lance Laser Legend Lion Lynx Mamba Mantis Matrix
Nebula Nexus Nitro Nova Onyx Orbit Panther Pixel Prism Pulse Quartz Radar Raven Razor Rebel Recon Rift Ronin Ruby Saber
Scope Shadow Shark Shogun Sniper Solar Spark Spear Stealth Storm Striker Sultan Surge Talon Tempest Thunder Titan Toxic
Turbo Typhoon Vector Vertex Volt Vortex Warden Wolf Xenon Zenith Zero Zephyr Atlas Bandit Cobalt Dragon Eclipse Fusion
Garnet Gladiator Jaguar Kraken Lightning Magnum Midnight Ninja Omega Pharaoh Pyro Quantum Rocket Samurai Siren Sphinx
Steel Tiger Viking Wasp Yeti Zodiac`.split(/\s+/)

const CS2_NAMES = `Aslan Kartal Şahin Doğan Kurt Pars Kaplan Panter Bozkurt Akrep Kobra Engerek Ejder Anka Simurg Tulpar
Atmaca Vaşak Leopar Puma Boğa Kuzgun Baykuş Bora Fırtına Kasırga Tayfun Yıldırım Şimşek Volkan Alev Ateş Kor Kıvılcım
Ayaz Tipi Sis Duman Gölge Gece Şafak Güneş Yıldız Kılıç Hançer Mızrak Balta Kalkan Zırh Miğfer Topuz Gürz Pala Kama
Sancak Han Hakan Paşa Hükümdar Komutan Kaptan Akıncı Sipahi Yeniçeri Atabey Alp Bahadır Batur Kağan Elmas Yakut Zümrüt
Safir Kehribar Obsidyen Granit Çelik Demir Bronz Altın Gümüş Platin Titanyum Krom Zirve Doruk Uçurum Kanyon Çöl Okyanus
Dalga Girdap Poyraz Lodos Karayel Mistral Tufan Deprem Meteor Kuyrukluyıldız Bulutsu Galaksi Pulsar Kuasar Nötron`.split(/\s+/)

function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const r2 = (v) => Math.round(v * 100) / 100

function key(s) {
  return [
    s.shape,
    s.color.toLowerCase(),
    s.size,
    s.thickness,
    s.length,
    s.gap,
    +!!s.outline,
    s.opacity,
    s.lineCap ?? 'butt',
    s.outerLength ?? 0,
    s.outerGap ?? 0,
    s.outerThickness ?? 0,
    s.funSymbol ?? '',
  ].join('|')
}

/* Oyuna göre ölçü profilleri: Valorant daha kalın ve dış çizgili, CS2 ince ve sıkı. */
const PROFILES = {
  valorant: {
    seed: 0x4b494e47,
    colors: [
      ['#00ffff', 5],
      ['#00ff00', 4],
      ['#ffff00', 3],
      ['#ffffff', 4],
      ['#ff00ff', 2],
      ['#7fff00', 2],
      ['#ff4655', 2],
      ['#00ffa2', 1],
      ['#d4ff00', 1],
      ['#ff9f1c', 1],
    ],
    types: [
      ['cross', 30],
      ['outer', 18],
      ['dot', 16],
      ['cross-dot', 14],
      ['t-cross', 9],
      ['circle', 7],
      ['brackets', 6],
    ],
    thickness: [0.9, 1.2, 1.45, 1.8, 2.2],
    length: [1.6, 2.2, 2.6, 3.05, 3.5, 3.9, 4.5],
    gap: [0, 0.75, 1.5, 2.25, 3],
    dot: [1.3, 1.6, 1.9, 2.3, 2.7, 3.1],
  },
  cs2: {
    seed: 0x43533221,
    colors: [
      ['#00ff00', 5],
      ['#00ffff', 5],
      ['#ffffff', 3],
      ['#ffff00', 3],
      ['#ff00ff', 2],
      ['#7fff00', 2],
      ['#ff3344', 1],
      ['#66a3ff', 1],
      ['#00ffa2', 1],
    ],
    types: [
      ['cross', 44],
      ['cross-dot', 16],
      ['dot', 16],
      ['t-cross', 12],
      ['circle', 3],
      ['brackets', 3],
    ],
    thickness: [0.45, 0.7, 0.9, 1.15, 1.35],
    length: [1.6, 2.0, 2.4, 2.7, 3.0, 3.4, 3.9],
    gap: [0, 0.55, 1.1, 1.65, 2.2],
    dot: [1.25, 1.5, 1.8, 2.1, 2.5],
  },
}

function weighted(rand, list) {
  const total = list.reduce((s, [, w]) => s + w, 0)
  let x = rand() * total
  for (const [v, w] of list) {
    x -= w
    if (x <= 0) return v
  }
  return list[list.length - 1][0]
}

const pick = (rand, arr) => arr[Math.floor(rand() * arr.length)]

function makeSettings(rand, prof, type) {
  const color = weighted(rand, prof.colors)
  const outline = rand() < 0.45
  const base = { color, opacity: 1, outline, lineCap: 'butt' }

  if (type === 'dot') {
    const t = pick(rand, prof.dot)
    return { ...base, shape: 'dot', size: Math.round(t * 2 + 12), thickness: t, length: 1, gap: 0, lineCap: 'round' }
  }
  if (type === 'circle') {
    const t = pick(rand, [0.8, 1, 1.2])
    const size = pick(rand, [12, 13, 14, 15, 16, 17, 18])
    return { ...base, shape: 'circle', size, thickness: t, length: 2, gap: 0 }
  }

  const length = pick(rand, prof.length)
  // Kalın + kısa çizgiler leke gibi görünür: kalınlık uzunluğun %55'ini geçmesin.
  const fitting = prof.thickness.filter((t) => t <= length * 0.55)
  const thickness = pick(rand, fitting.length ? fitting : [prof.thickness[0]])
  const gap = pick(rand, prof.gap)
  const reach = gap + length

  if (type === 'brackets') {
    const g = Math.max(1.5, gap + 1.5)
    const l = Math.max(2.4, length)
    return { ...base, shape: 'brackets', size: Math.round(2 * (g + l) + thickness * 2 + 6), thickness, length: l, gap: g }
  }

  if (type === 'outer') {
    const outerLength = pick(rand, [1.5, 2, 2.5, 3, 3.5])
    const outerGap = r2(reach + pick(rand, [1.5, 2, 2.5, 3]))
    const outerThickness = r2(Math.max(0.5, thickness - pick(rand, [0, 0.25, 0.45])))
    const size = Math.round(2 * (outerGap + outerLength) + thickness * 2 + 6)
    return {
      ...base,
      shape: rand() < 0.3 ? 'cross-dot' : 'cross',
      size,
      thickness,
      length,
      gap,
      outerLength,
      outerGap,
      outerThickness,
    }
  }

  return { ...base, shape: type, size: Math.round(2 * reach + thickness * 2 + 8), thickness, length, gap }
}

const SHAPE_TAG = {
  cross: 'cross',
  'cross-dot': 'cross-dot',
  't-cross': 't-cross',
  brackets: 'brackets',
  dot: 'dot',
  circle: 'circle',
}

export function buildKingSeries(game, existingKeys = new Set()) {
  const prof = PROFILES[game]
  const names = (game === 'cs2' ? CS2_NAMES : VALORANT_NAMES).filter(Boolean)
  if (new Set(names).size < 100) throw new Error(`${game}: KING isim listesi 100'den kısa`)
  const rand = mulberry32(prof.seed)
  const seen = new Set(existingKeys)
  const out = []

  // Her tipten en az bir tane olsun diye önce tipleri sırayla dene, sonra ağırlıklı seç.
  const order = prof.types.map(([t]) => t)
  let guard = 0
  while (out.length < 100 && guard < 50000) {
    guard += 1
    const type = out.length < order.length ? order[out.length] : weighted(rand, prof.types)
    const s = makeSettings(rand, prof, type)
    const k = key(s)
    if (seen.has(k)) continue
    seen.add(k)
    const n = String(out.length + 1).padStart(3, '0')
    out.push({
      id: `${game}-king-${n}`,
      name: `KING ${names[out.length]}`,
      lang: game === 'cs2' ? 'tr' : 'en',
      game,
      king: true,
      style: SHAPE_TAG[s.shape],
      source: 'Dijital Crosshair KING Serisi',
      settings: s,
    })
  }
  return out
}

export { key as kingSettingsKey }
