import { FriendBlockedItem } from '@/components/friends/friend-blocked-item'

async function getFriendBlocked() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [{ id: 1, name: 'John Doe' }]
}

export default async function FriendBlockedPage() {
  const friends = await getFriendBlocked()

  return (
    <>
      {friends.map(friend => (
        <FriendBlockedItem key={friend.id} friend={friend} />
      ))}
    </>
  )
}
