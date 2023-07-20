import { Suspense } from 'react'

import { AccountDropdown } from './account-dropdown'
import { AccountDropdownLoading, SidebarUsersLoading } from './loading'
import { SidebarUsers } from './sidebar-users'

export async function Sidebar() {
  return (
    <nav className='flex min-h-screen flex-col gap-4 rounded-md border-r p-2'>
      <h1 className='font-heading text-2xl'>Next Chat</h1>

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
