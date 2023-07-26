import type { User } from '@prisma/client'

import { FriendRequestItem } from '@/components/friends/friend-request-item'
import { Icons } from '@/components/icons'

type FriendRequest = Pick<User, 'id' | 'name' | 'username' | 'image'>

async function getFriendRequests(): Promise<FriendRequest[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Array.from({ length: 5 }).map((_, index) => ({
    id: `${index}`,
    username: `friend${index}`,
    name: `Friend ${index}`,
    image: null
  }))
}

export default async function FriendRequestPage() {
  const friends = await getFriendRequests()

  if (!friends.length)
    return (
      <div className='flex flex-col items-center gap-1'>
        <Icons.timesCircle className='h-14 w-14 text-muted-foreground' />
        <p className='text-base font-semibold'>You have no friend requests.</p>
      </div>
    )

  return (
    <>
      {friends.map(friend => (
        <FriendRequestItem key={friend.id} friend={friend} />
      ))}
    </>
  )
}
