import { Suspense } from 'react'
import Link from 'next/link'
import { Card } from 'ui'

import { AccountDropdown } from './account-dropdown'
import { AppbarLinks } from './appbar-links'
import { AccountDropdownLoading } from './loading'

export function Appbar() {
  return (
    <nav className='fixed left-0 top-0 z-50 w-full'>
      <div className='container relative pt-1'>
        <div className='absolute left-0 top-0 -z-10 h-[calc(100%-0.5rem)] w-full bg-background' />

        <Card className='flex items-center gap-2 rounded-md p-2'>
          <Link href='/' className='font-heading text-2xl'>
            Threads
          </Link>

          <AppbarLinks />

          <Suspense fallback={<AccountDropdownLoading />}>
            <AccountDropdown />
          </Suspense>
        </Card>
      </div>
    </nav>
  )
}
