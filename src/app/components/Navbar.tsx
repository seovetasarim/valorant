'use client'
import Logo from './Logo'
import RouteLinks from './RouterLinks'
import { GiCrocSword, GiCrosshair } from 'react-icons/gi'
import { HiOutlineDownload, HiOutlineNewspaper } from 'react-icons/hi'
import { RxDashboard } from 'react-icons/rx'
import { LiaIdCardAltSolid, LiaMapSolid } from 'react-icons/lia'

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-center md:w-auto">
      <ul className="flex h-full w-full items-center justify-around px-2">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <RouteLinks href="/" icon={RxDashboard} text="Ana Sayfa" />
        <RouteLinks
          href="/views/crosshairs"
          icon={GiCrosshair}
          text="Nişangah"
        />
        <RouteLinks
          href="/views/blog"
          icon={HiOutlineNewspaper}
          text="Blog"
        />
        <RouteLinks
          href="/views/dijital-crosshair-indir"
          icon={HiOutlineDownload}
          text="İndir"
        />
        <RouteLinks
          href="/views/agents"
          icon={LiaIdCardAltSolid}
          text="Ajanlar"
        />
        <RouteLinks href="/views/weapons" icon={GiCrocSword} text="Silahlar" />
        <RouteLinks href="/views/maps" icon={LiaMapSolid} text="Haritalar" />
      </ul>
    </nav>
  )
}

export default Navbar
