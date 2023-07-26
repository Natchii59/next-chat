import type { User } from '@prisma/client'

import { UserAvatar } from '../user-avatar'

interface MessagesProfileHeaderProps {
  user: Pick<User, 'id' | 'username' | 'name' | 'image'>
}

export function MessagesProfileHeader({ user }: MessagesProfileHeaderProps) {
  return (
    <div className='grid gap-2'>
      <UserAvatar user={user} className='h-20 w-20' classNameIcon='h-8 w-8' />

      <h3 className='text-2xl font-bold'>{user.name}</h3>

      <p className='text-muted-foreground'>
        This is the beginning of your direct message history with{' '}
        <span className='font-semibold'>{user.name}</span>.
      </p>
    </div>
  )
}
