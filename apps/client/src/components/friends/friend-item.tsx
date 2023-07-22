'use client'

import { useRouter } from 'next/navigation'
import { buttonVariants, cn } from 'ui'

import { UserAvatar } from '../user-avatar'

interface FriendItemProps {
  friend: {
    id: number
    name: string
    image?: string
  }
}

export function FriendItem({ friend }: FriendItemProps) {
  const router = useRouter()

  function redirectToUserChat(userId: number) {
    router.push(`/chat/${userId}`)
  }

  return (
    <li
      onClick={() => redirectToUserChat(friend.id)}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'h-auto cursor-pointer justify-start px-3 py-1.5'
      )}
    >
      <UserAvatar user={friend} className='mr-2' />
      <span>{friend.name}</span>
    </li>
  )
}
