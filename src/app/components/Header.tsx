import Navbar from './Navbar'
import AppDownloadButton from './AppDownloadButton'

function Header() {
  return (
    <header className="bg-gradient-container absolute bottom-0 left-0 z-50 grid h-20 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 overflow-hidden px-1 md:top-0 md:bg-none md:px-2 md:pr-3">
      <Navbar />
      <div className="flex h-full shrink-0 items-center self-center">
        <AppDownloadButton />
      </div>
    </header>
  )
}

export default Header
