import { Separator } from 'ui'

import { getCurrentUser } from '@/lib/session'

import { ProfileForm } from './profile-form'

export default async function ProfileSettingsPage() {
  const user = await getCurrentUser()

  return (
    <div className='space-y-4'>
      <p className='text-center text-sm text-muted-foreground'>
        This is how others will see you.
      </p>

      <Separator />
      <ProfileForm user={user} />
    </div>
  )
}
