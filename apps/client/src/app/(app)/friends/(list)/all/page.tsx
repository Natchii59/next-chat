import type { User } from '@prisma/client'

import { FriendItem } from '@/components/friends/friend-item'
import { Icons } from '@/components/icons'

type Friend = Pick<User, 'id' | 'name' | 'username' | 'image'>

async function getFriends(): Promise<Friend[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Array.from({ length: 30 }).map((_, index) => ({
    id: `${index}`,
    username: `friend${index}`,
    name: `Friend ${index}`,
    image: null
  }))
}

export default async function FriendsPage() {
  const friends = await getFriends()

  if (!friends.length)
    return (
      <div className='flex flex-col items-center gap-1'>
        <Icons.timesCircle className='h-14 w-14 text-muted-foreground' />
        <p className='text-base font-semibold'>You have no friends.</p>
      </div>
    )

  return (
    <>
      {friends.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </>
  )
}
