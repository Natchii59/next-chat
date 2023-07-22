'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants, cn } from 'ui'

import { NavbarFriendsLink } from './datas'

interface NavbarLinkItemProps {
  link: NavbarFriendsLink
  status?: number
}

export function NavbarLinkItem({ link, status }: NavbarLinkItemProps) {
  const pathname = usePathname()

  return (
    <Link
      href={link.href}
      className={cn(
        buttonVariants({
          variant: link.primary ? 'default' : 'ghost',
          size: 'sm'
        }),
        'h-auto py-1.5',
        pathname === link.href && !link.primary
          ? 'bg-muted hover:bg-muted/80'
          : null
      )}
    >
      {status ? (
        <span className='mr-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-400 text-xs'>
          {status}
        </span>
      ) : null}

      <span>{link.name}</span>
    </Link>
  )
}
