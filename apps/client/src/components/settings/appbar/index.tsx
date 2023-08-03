import { Suspense } from 'react'

import { SettingsAppbarBackLink, SettingsAppbarTitle } from './client'
import { SettingsUsernameAppbarLoading } from './loading'
import { SettingsUsernameAppbar } from './username'

export function SettingsAppbar() {
  return (
    <nav className='fixed left-0 top-0 z-50 w-full'>
      <div className='container relative bg-background py-2'>
        <div className='relative flex flex-col items-center gap-1'>
          <SettingsAppbarTitle />

          <Suspense fallback={<SettingsUsernameAppbarLoading />}>
            <SettingsUsernameAppbar />
          </Suspense>

          <SettingsAppbarBackLink />
        </div>
      </div>
    </nav>
  )
}
