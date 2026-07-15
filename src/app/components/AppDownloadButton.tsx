import Link from 'next/link'
import { HiOutlineDownload } from 'react-icons/hi'
import { ROUTES } from '@/lib/routes'

const AppDownloadButton = () => {
  return (
    <Link
      href={ROUTES.download}
      className="group flex h-10 shrink-0 items-center gap-1.5 self-center border-2 border-primary-700 bg-primary-700 px-2.5 transition-all duration-200 hover:border-white hover:bg-transparent md:h-11 md:gap-2 md:px-3 lg:px-4"
    >
      <HiOutlineDownload className="h-4 w-4 shrink-0 text-white transition-colors group-hover:text-primary-700 md:h-5 md:w-5" />
      <span className="flex min-w-0 flex-col justify-center leading-tight">
        <span className="hidden whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.12em] text-white/75 group-hover:text-primary-700 md:block lg:text-[9px]">
          Uygulama indir
        </span>
        <span className="whitespace-nowrap text-[10px] font-bold uppercase text-white group-hover:text-white md:text-[11px] lg:text-xs">
          Dijital Crosshair
        </span>
      </span>
    </Link>
  )
}

export default AppDownloadButton
