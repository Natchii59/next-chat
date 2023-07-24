import { FriendItem } from '@/components/friends/friend-item'
import { Icons } from '@/components/icons'

interface Friends {
  id: string
  name: string
}

async function getFriends(): Promise<Friends[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Array.from({ length: 30 }).map((_, index) => ({
    id: `${index}`,
    name: `Friend ${index}`
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
