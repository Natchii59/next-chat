import { FriendRequestItem } from '@/components/friends/friend-request-item'
import { Icons } from '@/components/icons'

interface FriendRequest {
  id: string
  name: string
}

async function getFriendRequests(): Promise<FriendRequest[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Array.from({ length: 5 }).map((_, index) => ({
    id: `${index}`,
    name: `Friend ${index}`
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
