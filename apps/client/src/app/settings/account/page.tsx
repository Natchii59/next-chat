import { Separator } from 'ui'

import { getCurrentUser } from '@/lib/session'

import { AccountForm } from './account-form'

export default async function AccountSettingsPage() {
  const user = await getCurrentUser()

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Account</h3>
        <p className='text-sm text-muted-foreground'>
          Update your account settings.
        </p>
      </div>

      <Separator />
      <AccountForm user={user} />
    </div>
  )
}
