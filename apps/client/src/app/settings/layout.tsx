import React from 'react'
import Link from 'next/link'
import { buttonVariants, cn, Separator } from 'ui'

import { Icons } from '@/components/icons'
import { SettingsSidebar } from '@/components/settings/sidebar'

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/settings/profile'
  },
  {
    title: 'Account',
    href: '/settings/account'
  },
  {
    title: 'Language',
    href: '/settings/language'
  }
]

export default function SettingsLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='space-y-6 p-10 pb-16'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'sm' }),
          'absolute left-6 top-4'
        )}
      >
        <Icons.chevronLeft className='mr-2 h-4 w-4' />
        <span>Home</span>
      </Link>

      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Settings</h2>
        <p className='text-muted-foreground'>
          Manage account and website settings.
        </p>
      </div>

      <Separator className='my-6' />

      <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <aside className='-mx-4 lg:w-1/5'>
          <SettingsSidebar items={sidebarNavItems} />
        </aside>

        <div className='flex-1 lg:max-w-2xl'>{children}</div>
      </div>
    </div>
  )
}
