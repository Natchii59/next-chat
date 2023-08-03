'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants, cn } from 'ui'

import { Icons } from '@/components/icons'

import { settingsLinks } from './datas'

export function SettingsAppbarTitle() {
  const pathname = usePathname()

  return (
    <h2 className='font-heading text-xl tracking-wide'>
      {settingsLinks.find(s => s.href === pathname)?.title ?? 'Settings'}
    </h2>
  )
}

export function SettingsAppbarBackLink() {
  const pathname = usePathname()

  return (
    <Link
      href={pathname === '/settings' ? '/' : '/settings'}
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        'absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-1'
      )}
    >
      <Icons.chevronLeft className='h-4 w-4' />
      <span>{pathname === '/settings' ? 'Home' : 'Settings'}</span>
    </Link>
  )
}
