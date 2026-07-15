'use client'
import Logo from './Logo'
import RouteLinks from './RouterLinks'
import { GiCrocSword, GiCrosshair } from 'react-icons/gi'
import { HiOutlineDownload, HiOutlineNewspaper } from 'react-icons/hi'
import { RxDashboard } from 'react-icons/rx'
import { LiaIdCardAltSolid, LiaMapSolid } from 'react-icons/lia'

import { ROUTES } from '@/lib/routes'

function Navbar() {
  return (
    <nav className="flex h-full min-w-0 items-center overflow-hidden">
      <ul className="flex h-full min-w-0 flex-nowrap items-center gap-0.5 overflow-hidden px-1 md:gap-1 lg:gap-1.5 xl:gap-2">
        <li className="hidden shrink-0 md:list-item">
          <Logo />
        </li>
        <RouteLinks href={ROUTES.home} icon={RxDashboard} text="Ana Sayfa" />
        <RouteLinks
          href={ROUTES.crosshairs}
          icon={GiCrosshair}
          text="Nişangah"
        />
        <RouteLinks href={ROUTES.blog} icon={HiOutlineNewspaper} text="Blog" />
        <RouteLinks
          href={ROUTES.download}
          icon={HiOutlineDownload}
          text="İndir"
          className="lg:hidden"
        />
        <RouteLinks
          href={ROUTES.agents}
          icon={LiaIdCardAltSolid}
          text="Ajanlar"
        />
        <RouteLinks href={ROUTES.weapons} icon={GiCrocSword} text="Silahlar" />
        <RouteLinks href={ROUTES.maps} icon={LiaMapSolid} text="Haritalar" />
      </ul>
    </nav>
  )
}

export default Navbar
