import { SidebarUserItem } from './sidebar-user-item'

async function getUsersSidebar() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Array.from({ length: 30 }).map((_, index) => ({
    id: `${index}`,
    name: `User ${index}`
  }))
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
