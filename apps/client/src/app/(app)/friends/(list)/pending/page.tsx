import { FriendPendingItem } from '@/components/friends/friend-pending-item'
import { Icons } from '@/components/icons'

interface FriendPending {
  id: string
  name: string
}

async function getFriendPending(): Promise<FriendPending[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return []
}

export default async function FriendPendingPage() {
  const friends = await getFriendPending()

  if (!friends.length)
    return (
      <div className='flex flex-col items-center gap-1'>
        <Icons.timesCircle className='h-14 w-14 text-muted-foreground' />
        <p className='text-base font-semibold'>
          You have no pending friend requests.
        </p>
      </div>
    )

  return (
    <>
      {friends.map(friend => (
        <FriendPendingItem key={friend.id} friend={friend} />
      ))}
    </>
  )
}
