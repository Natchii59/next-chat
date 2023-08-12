import Link from 'next/link'
import { User } from '@prisma/client'

import { UserAvatar } from '@/components/user-avatar'

interface MutualFollowerItemProps {
  user: Pick<User, 'id' | 'username' | 'name' | 'image'>
}

export function MutualFollowerItem({ user }: MutualFollowerItemProps) {
  return (
    <Link
      href={`/user/${user.username}`}
      className='group flex items-center gap-2 overflow-hidden'
    >
      <UserAvatar user={user} />

      <div className='flex-auto overflow-hidden'>
        <h3 className='truncate font-semibold leading-tight underline-offset-2 group-hover:underline'>
          {user.name ?? user.username}
        </h3>
        {user.name && (
          <h4 className='truncate text-sm text-muted-foreground'>
            {user.username}
          </h4>
        )}
      </div>
    </Link>
  )
}
