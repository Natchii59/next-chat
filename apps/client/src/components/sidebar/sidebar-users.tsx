import type { User } from '@prisma/client'

import { SidebarUserItem } from './sidebar-user-item'

type SidebarUser = Pick<User, 'id' | 'name' | 'username' | 'image'>

async function getUsersSidebar(): Promise<SidebarUser[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Array.from({ length: 30 }).map((_, index) => ({
    id: `${index}`,
    username: `user${index}`,
    name: `User ${index}`,
    image: null
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
