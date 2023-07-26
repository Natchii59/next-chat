import { Separator } from 'ui'

import { getCurrentUser } from '@/lib/session'

import { ProfileForm } from './profile-form'

export default async function ProfileSettingsPage() {
  const user = await getCurrentUser()

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-medium'>Profile</h3>
        <p className='text-sm text-muted-foreground'>
          This is how others will see you.
        </p>
      </div>

      <Separator />
      <ProfileForm user={user} />
    </div>
  )
}
