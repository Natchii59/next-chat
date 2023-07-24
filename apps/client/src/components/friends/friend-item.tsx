'use client'

import { useRouter } from 'next/navigation'
import {
  buttonVariants,
  cn,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from 'ui'

import { UserAvatar } from '../user-avatar'

interface FriendItemProps {
  friend: {
    id: string
    name: string
    image?: string
  }
}

export function FriendItem({ friend }: FriendItemProps) {
  const router = useRouter()

  function redirectToUserChat(userId: string) {
    router.push(`/chat/${userId}`)
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <li
          onClick={() => redirectToUserChat(friend.id)}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'h-auto cursor-pointer justify-start px-3 py-1.5 data-[state=open]:bg-accent'
          )}
        >
          <UserAvatar user={friend} className='mr-2' />
          <span>{friend.name}</span>
        </li>
      </ContextMenuTrigger>

      <ContextMenuContent className='min-w-[10rem]'>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Message</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Remove friend</ContextMenuItem>
        <ContextMenuItem>Block</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
