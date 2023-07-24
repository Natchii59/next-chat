import { Suspense } from 'react'
import Link from 'next/link'
import { ScrollArea } from 'ui'

import { AccountDropdown } from './account-dropdown'
import { AccountDropdownLoading, SidebarUsersLoading } from './loading'
import { SidebarUsers } from './sidebar-users'

export async function Sidebar() {
  return (
    <nav className='flex h-screen flex-col gap-4 rounded-md border-r border-secondary p-2'>
      <Link href='/' className='font-heading text-2xl'>
        Next Chat
      </Link>

      <ScrollArea className='flex-auto'>
        <div className='flex flex-col gap-2'>
          <Suspense fallback={<SidebarUsersLoading />}>
            <SidebarUsers />
          </Suspense>
        </div>
      </ScrollArea>

      <Suspense fallback={<AccountDropdownLoading />}>
        <AccountDropdown />
      </Suspense>
    </nav>
  )
}
