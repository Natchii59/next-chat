import {
  buttonVariants,
  cn,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from 'ui'

import { ButtonTooltip } from '../button-tooltip'
import { Icons } from '../icons'
import { UserAvatar } from '../user-avatar'

interface FriendItemProps {
  friend: {
    id: string
    name: string
    image?: string
  }
}

export function FriendPendingItem({ friend }: FriendItemProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <li
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'h-auto justify-start px-3 py-1.5 data-[state=open]:bg-accent'
          )}
        >
          <UserAvatar user={friend} className='mr-2' />
          <span className='flex-auto'>{friend.name}</span>

          <ButtonTooltip
            size='icon'
            className='h-6 w-6'
            button={<Icons.times className='h-5 w-5' />}
            tooltip={<span>Cancel</span>}
          />
        </li>
      </ContextMenuTrigger>

      <ContextMenuContent className='min-w-[10rem]'>
        <ContextMenuItem>Profile</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
