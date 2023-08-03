'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants, cn } from 'ui'

import { Icons, type IconType } from '../icons'

interface Link {
  icon: IconType
  href: string
}

const links: Link[] = [
  {
    icon: Icons.search,
    href: '/search'
  },
  {
    icon: Icons.bell,
    href: '/notifications'
  }
]

export function AppbarLinks() {
  const pathname = usePathname()

  return (
    <ul className='flex flex-auto items-center justify-end gap-2'>
      {links.map(({ icon: Icon, href }, index) => (
        <Link
          key={index}
          href={href}
          className={cn(
            buttonVariants({ size: 'icon', variant: 'ghost' }),
            pathname === href && 'bg-accent'
          )}
        >
          <Icon className='h-4 w-4' />
        </Link>
      ))}
    </ul>
  )
}
