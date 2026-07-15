import { AiOutlineCopyright } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="pointer-events-none absolute bottom-0 left-0 z-40 flex w-full items-end justify-between gap-3 px-3 pb-2 pt-1 md:px-4 md:pb-3">
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
          href={'https://www.dijitalwebsite.com'}
          target="_blank"
          rel="noopener noreferrer"
        >
          dijitalwebsite
        </Link>
      </div>
    </footer>
  )
}
export default Footer
