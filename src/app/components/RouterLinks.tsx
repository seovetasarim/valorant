'use client'
import Link from 'next/link'
import { RouteLinksProps } from '@/@types'
import { usePathname } from 'next/navigation'

const RouteLinks = ({
  href,
  icon: Icon,
  text,
  className = '',
}: RouteLinksProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <li className={`shrink-0 list-none ${className}`}>
      <Link
        className={`flex h-20 items-center justify-center gap-1 px-1.5 text-[10px] font-semibold transition-all ease-in hover:text-white md:px-2 md:text-xs lg:px-2.5 ${
          isActive ? 'text-white' : 'text-primary-800'
        }`}
        href={href}
      >
        <Icon className="h-5 w-5 shrink-0 md:h-[18px] md:w-[18px]" />
        <span className="hidden whitespace-nowrap md:inline">{text}</span>
      </Link>
    </li>
  )
}

export default RouteLinks
