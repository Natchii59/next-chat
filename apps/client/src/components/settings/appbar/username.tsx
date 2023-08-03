import { getCurrentUser } from '@/lib/session'

export async function SettingsUsernameAppbar() {
  const user = await getCurrentUser()

  return (
    <p className='max-w-[200px] truncate text-muted-foreground'>
      {user.username}
    </p>
  )
}
