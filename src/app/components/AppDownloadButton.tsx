import Link from 'next/link'
import { HiOutlineDownload } from 'react-icons/hi'

const AppDownloadButton = () => {
  return (
    <Link
      href="/views/dijital-crosshair-indir"
      className="group flex shrink-0 items-center gap-2 border-2 border-primary-700 bg-primary-700 px-3 py-1.5 transition-all duration-200 hover:border-white hover:bg-transparent md:mr-3 md:px-4"
    >
      <HiOutlineDownload className="h-4 w-4 shrink-0 text-white transition-colors group-hover:text-primary-700 md:h-5 md:w-5" />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="hidden text-[9px] font-semibold uppercase tracking-[0.14em] text-white/75 group-hover:text-primary-700 sm:block">
          Uygulama indir
        </span>
        <span className="truncate text-[11px] font-bold uppercase text-white group-hover:text-white md:text-xs">
          Dijital Crosshair
        </span>
      </span>
    </Link>
  )
}

export default AppDownloadButton
