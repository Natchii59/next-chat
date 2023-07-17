import SidebarUser from '@/components/chat/sidebar/sidebar-user'

async function getUsersSidebar() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' }
  ]

  await new Promise(resolve => setTimeout(resolve, 0))

  return users
}

export default async function SidebarPage() {
  const users = await getUsersSidebar()

  return (
    <>
      {users.map(user => (
        <SidebarUser key={user.id} user={user} />
      ))}
    </>
  )
}
