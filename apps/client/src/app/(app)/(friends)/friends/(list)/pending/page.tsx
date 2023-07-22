import { FriendPendingItem } from '@/components/friends/friend-pending-item'

async function getFriendPending() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [{ id: 1, name: 'John Doe' }]
}

export default async function FriendPendingPage() {
  const friends = await getFriendPending()

  return (
    <>
      {friends.map(friend => (
        <FriendPendingItem key={friend.id} friend={friend} />
      ))}
    </>
  )
}
