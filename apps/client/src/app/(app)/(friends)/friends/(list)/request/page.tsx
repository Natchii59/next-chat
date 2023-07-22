import { FriendRequestItem } from '@/components/friends/friend-request-item'

async function getFriendRequests() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ]
}

export default async function FriendRequestPage() {
  const friends = await getFriendRequests()

  return (
    <>
      {friends.map(friend => (
        <FriendRequestItem key={friend.id} friend={friend} />
      ))}
    </>
  )
}
