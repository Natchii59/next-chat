import { Separator } from 'ui'

import { getCurrentUser } from '@/lib/session'

import { AccountForm } from './account-form'

export default async function AccountSettingsPage() {
  const user = await getCurrentUser()

  return (
    <div className='space-y-4'>
      <p className='text-center text-sm text-muted-foreground'>
        Update your account settings.
      </p>

      <Separator />
      <AccountForm user={user} />
    </div>
  )
}
