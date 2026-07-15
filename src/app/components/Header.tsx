import Navbar from './Navbar'
import AppDownloadButton from './AppDownloadButton'

function Header() {
  return (
    <header className="bg-gradient-container absolute bottom-0 left-0 z-50 flex h-20 w-full flex-row items-center justify-between overflow-hidden px-1 md:top-0 md:bg-none md:p-0 md:pr-2">
      <Navbar />
      <div className="hidden shrink-0 items-center md:flex">
        <AppDownloadButton />
      </div>
      <div className="flex shrink-0 items-center pr-2 md:hidden">
        <AppDownloadButton />
      </div>
    </header>
  )
}

export default Header
