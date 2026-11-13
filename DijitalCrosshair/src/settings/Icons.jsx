const base = {
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const paths = {
  home: <path d="M4 11.5 12 4.5l8 7M6 10v9.5h4.5v-5h3v5H18V10" />,
  target: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </>
  ),
  star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8Z" />,
  book: <path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5ZM12 6.5v13" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.8 14 4l2.3-.4 1.1 2 2.1 1.1-.3 2.3L20.5 11v2l-1.3 2 .3 2.3-2.1 1.1-1.1 2-2.3-.4-2 1.2-2-1.2-2.3.4-1.1-2-2.1-1.1.3-2.3L3.5 13v-2l1.3-2-.3-2.3 2.1-1.1 1.1-2L10 4Z" />
    </>
  ),
  sparkle: <path d="M12 3v5M12 16v5M3 12h5M16 12h5M7.5 7.5l1.5 1.5M15 15l1.5 1.5M16.5 7.5 15 9M9 15l-1.5 1.5" />,
  crown: <path d="M4 17.5h16M4.5 15 3.5 7l5 3.5L12 5l3.5 5.5 5-3.5-1 8Z" />,
  broadcast: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M8.2 15.8a5.4 5.4 0 0 1 0-7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6M5.4 18.6a9.3 9.3 0 0 1 0-13.2M18.6 5.4a9.3 9.3 0 0 1 0 13.2" />
    </>
  ),
  shapes: (
    <>
      <circle cx="7.5" cy="7.5" r="3.5" />
      <path d="M13.5 4h6.5v6.5h-6.5ZM7.5 13.5 11.5 20h-8Z" />
      <path d="M17 13.5v7M13.5 17h7" />
    </>
  ),
  layers: <path d="m12 4 8.5 4.5L12 13 3.5 8.5ZM3.5 12.5 12 17l8.5-4.5M3.5 16.5 12 21l8.5-4.5" />,
  fire: (
    <path
      d="M12 21c-3.9 0-6.5-2.6-6.5-6.2 0-3.2 2.2-5 3.4-7.6.4 1.6 1.2 2.6 2.1 3 0-3 1.5-5.7 4-7.2-.3 2.7.8 4.6 2.2 6.4 1.2 1.6 1.8 3.2 1.8 5.1C19 18.3 16 21 12 21Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  bars: <path d="M5 20v-6M10 20V9M15 20v-8M20 20V4" strokeWidth="2.6" />,
  grid: <path d="M4.5 4.5h6v6h-6ZM13.5 4.5h6v6h-6ZM4.5 13.5h6v6h-6ZM13.5 13.5h6v6h-6Z" />,
  download: <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14" />,
  heart: <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />,
  chevron: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  left: <path d="m14.5 6-6 6 6 6" />,
  right: <path d="m9.5 6 6 6-6 6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  shuffle: <path d="M16 4h4v4M4 20 20 4M20 16v4h-4M14.5 14.5 20 20M4 4l5 5" />,
  power: <path d="M12 3.5v8M6.6 6.2a8 8 0 1 0 10.8 0" />,
  tray: <path d="M4 14h4l1.5 3h5L16 14h4M4 14l2.5-8.5h11L20 14v5.5H4Z" />,
  exit: <path d="M14 4h4.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H14M10 16l-4-4 4-4M6 12h10" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.6 2.6 14.4 0 17M12 3.5c-2.6 2.6-2.6 14.4 0 17" />
    </>
  ),
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
      <path d="M15.5 8.5V6A1.5 1.5 0 0 0 14 4.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  keyboard: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10" strokeWidth="2" />
    </>
  ),
  reset: <path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3L4.5 9M4.5 4.5V9H9" />,
  edit: <path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16Z M13.5 6.5l4 4" />,
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5M12 7.8h.01" strokeWidth="2.2" />
    </>
  ),
  min: <path d="M6 12h12" />,
  max: <rect x="6.5" y="6.5" width="11" height="11" rx="1" />,
  restore: <path d="M8.5 8.5h9v9h-9ZM6.5 15.5v-9h9" />,
  close: <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />,
}

export default function Icon({ name, size = 18, filled = false, ...rest }) {
  return (
    <svg {...base} width={size} height={size} fill={filled ? 'currentColor' : 'none'} {...rest}>
      {paths[name]}
    </svg>
  )
}
