import { SidebarUserItem } from './sidebar-user-item'

async function getUsersSidebar() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' }
  ]

  await new Promise(resolve => setTimeout(resolve, 1000))

  return users
}

export async function SidebarUsers() {
  const users = await getUsersSidebar()

  return (
    <>
      {users.map(user => (
        <SidebarUserItem key={user.id} user={user} />
      ))}
    </>
  )
}
