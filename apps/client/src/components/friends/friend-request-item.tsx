import { buttonVariants, cn } from 'ui'

import { ButtonTooltip } from '../button-tooltip'
import { Icons } from '../icons'
import { UserAvatar } from '../user-avatar'

interface FriendItemProps {
  friend: {
    id: number
    name: string
    image?: string
  }
}

export function FriendRequestItem({ friend }: FriendItemProps) {
  return (
    <li
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'h-auto justify-start px-3 py-1.5'
      )}
    >
      <UserAvatar user={friend} className='mr-2' />
      <span className='flex-auto'>{friend.name}</span>

      <div className='flex items-center gap-2'>
        <ButtonTooltip
          size='icon'
          className={cn('h-6 w-6')}
          button={<Icons.check className='h-5 w-5' />}
          tooltip={<span>Accept</span>}
        />

        <ButtonTooltip
          size='icon'
          className={cn('h-6 w-6')}
          button={<Icons.times className='h-5 w-5' />}
          tooltip={<span>Decline</span>}
        />
      </div>
    </li>
  )
}
