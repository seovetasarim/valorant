import { AiOutlineCopyright } from 'react-icons/ai'
import Link from 'next/link'

const sponsorLinks = [
  {
    label: 'toptan çocuk mont',
    href: 'https://www.cocukmont.com.tr',
  },
  {
    label: 'silivri tesisat',
    href: 'https://www.lyyildirimlarinsaat.com/silivri-tesisat',
  },
  {
    label: 'silivri tadilat',
    href: 'https://www.lyyildirimlarinsaat.com/silivri-tadilat',
  },
  {
    label: 'silivri duşakabin',
    href: 'https://www.lyyildirimlarinsaat.com/silivri-dusakabin',
  },
  {
    label: 'web tasarım',
    href: 'https://www.dijitalwebsite.com/web-tasarim',
  },
  {
    label: 'web tasarım seo',
    href: 'https://www.dijitalwebsite.com',
  },
  {
    label: 'seo hizmeti',
    href: 'https://www.dijitalwebsite.com/seo-hizmeti',
  },
] as const

const Footer = () => {
  return (
    <footer className="pointer-events-none absolute bottom-0 left-0 z-40 w-full px-3 pb-2 pt-1 md:px-4 md:pb-3">
      <div className="flex w-full items-end justify-between gap-3">
        <p className="pointer-events-none max-w-[70%] text-[8px] leading-snug text-primary-800/90 md:max-w-md md:text-[10px]">
          Bu site Riot Games ile bağlantılı değildir. Valorant ve Riot Games
          markaları Riot Games, Inc.&apos;e aittir. Tüm ilgili haklar saklıdır.
          Fan içeriğidir; resmi ürün veya hizmet değildir.
        </p>

        <div className="pointer-events-auto hidden items-center md:flex">
          <span className="flex items-center justify-center text-xs text-primary-800">
            <AiOutlineCopyright className="h-4 w-4" />
          </span>
          <Link
            className="mx-1 flex items-center justify-center text-xs font-semibold text-primary-800 transition-all ease-in hover:text-white"
            href="https://www.dijitalwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            dijitalwebsite
          </Link>
        </div>
      </div>

      <nav
        className="pointer-events-auto mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 border-t border-primary-700/30 pt-1"
        aria-label="Sponsor bağlantıları"
      >
        <span className="text-[9px] font-semibold uppercase tracking-wider text-primary-800/80 md:text-[10px]">
          Sponsorluk
        </span>
        {sponsorLinks.map((link, i) => (
          <span
            key={`${link.href}-${link.label}`}
            className="inline-flex items-center gap-x-2"
          >
            <span className="select-none text-primary-800/40" aria-hidden>
              {i === 0 ? '·' : '|'}
            </span>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] text-primary-800 transition-colors hover:text-white md:text-[10px]"
            >
              {link.label}
            </a>
          </span>
        ))}
      </nav>
    </footer>
  )
}
export default Footer
