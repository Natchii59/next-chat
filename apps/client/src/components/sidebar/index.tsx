import { Suspense } from 'react'
import Link from 'next/link'

import { AccountDropdown } from './account-dropdown'
import { AccountDropdownLoading, SidebarUsersLoading } from './loading'
import { SidebarUsers } from './sidebar-users'

export async function Sidebar() {
  return (
    <nav className='flex min-h-screen flex-col gap-4 rounded-md border-r border-secondary p-2'>
      <Link href='/' className='font-heading text-2xl'>
        Next Chat
      </Link>

      <div className='flex flex-auto flex-col items-start gap-2'>
        <Suspense fallback={<SidebarUsersLoading />}>
          <SidebarUsers />
        </Suspense>
      </div>

      <Suspense fallback={<AccountDropdownLoading />}>
        <AccountDropdown />
      </Suspense>
    </nav>
  )
}
