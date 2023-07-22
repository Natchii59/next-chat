import { Suspense } from 'react'

import { NavbarLinksLoading } from './loading'
import { NavbarLinksStatus } from './navbar-links-status'

export async function NavbarFriends() {
  return (
    <nav className='rounded-md border-b px-4 py-2'>
      <ul className='flex gap-2'>
        <Suspense fallback={<NavbarLinksLoading />}>
          <NavbarLinksStatus />
        </Suspense>
      </ul>
    </nav>
  )
}
