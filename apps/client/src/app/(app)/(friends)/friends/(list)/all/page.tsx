import { FriendItem } from '@/components/friends/friend-item'

async function getFriends() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
    { id: 4, name: 'Jane Smith' },
    { id: 5, name: 'John Doe' },
    { id: 6, name: 'Jane Doe' },
    { id: 7, name: 'John Smith' },
    { id: 8, name: 'Jane Smith' },
    { id: 9, name: 'John Doe' },
    { id: 10, name: 'Jane Doe' },
    { id: 11, name: 'John Smith' },
    { id: 12, name: 'Jane Smith' },
    { id: 13, name: 'John Doe' },
    { id: 14, name: 'Jane Doe' },
    { id: 15, name: 'John Smith' },
    { id: 16, name: 'Jane Smith' },
    { id: 17, name: 'John Doe' },
    { id: 18, name: 'Jane Doe' },
    { id: 19, name: 'John Smith' },
    { id: 20, name: 'Jane Smith' },
    { id: 21, name: 'John Doe' },
    { id: 22, name: 'Jane Doe' },
    { id: 23, name: 'John Smith' },
    { id: 24, name: 'Jane Smith' },
    { id: 25, name: 'John Doe' },
    { id: 26, name: 'Jane Doe' },
    { id: 27, name: 'John Smith' },
    { id: 28, name: 'Jane Smith' },
    { id: 29, name: 'John Doe' },
    { id: 30, name: 'Jane Doe' }
  ]
}

export default async function FriendsPage() {
  const friends = await getFriends()

  return (
    <>
      {friends.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </>
  )
}
