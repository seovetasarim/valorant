'use client'
import Logo from './Logo'
import RouteLinks from './RouterLinks'
import { GiCrocSword, GiCrosshair } from 'react-icons/gi'
import { HiOutlineDownload, HiOutlineNewspaper } from 'react-icons/hi'
import { RxDashboard } from 'react-icons/rx'
import { LiaIdCardAltSolid, LiaMapSolid } from 'react-icons/lia'

function Navbar() {
  return (
    <nav className="flex h-full min-w-0 items-center overflow-hidden">
      <ul className="flex h-full min-w-0 flex-nowrap items-center gap-0.5 overflow-hidden px-1 md:gap-1 lg:gap-1.5 xl:gap-2">
        <li className="hidden shrink-0 md:list-item">
          <Logo />
        </li>
        <RouteLinks href="/" icon={RxDashboard} text="Ana Sayfa" />
        <RouteLinks
          href="/views/crosshairs"
          icon={GiCrosshair}
          text="Nişangah"
        />
        <RouteLinks href="/views/blog" icon={HiOutlineNewspaper} text="Blog" />
        {/* lg+ üst CTA varken tekrar etmesin */}
        <RouteLinks
          href="/views/dijital-crosshair-indir"
          icon={HiOutlineDownload}
          text="İndir"
          className="lg:hidden"
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
