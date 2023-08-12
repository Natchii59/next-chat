import { User } from '@prisma/client'
import { ScrollArea } from 'ui'

import { db } from '@/lib/db'

import { MutualFollowerItem } from './mutual-follower-item'

interface MutualFollowersListProps {
  user: Pick<User, 'id' | 'username'>
}

type GetMutualFollowersResponse = Pick<
  User,
  'id' | 'username' | 'name' | 'image'
>[]

export async function getMutualFollowers(
  userId: string
): Promise<GetMutualFollowersResponse> {
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId
      },
      select: {
        id: true,
        username: true,
        name: true,
        image: true
      }
    })

    if (!user) return []

    return Array.from({ length: 10 }, () => user)
  } catch (err) {
    console.error(err)
    return []
  }
}

export async function MutualFollowersList({ user }: MutualFollowersListProps) {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const users = await getMutualFollowers(user.id)

  return (
    <ScrollArea className='max-h-[300px]'>
      <div className='grid gap-3'>
        {users.map((user, i) => (
          <MutualFollowerItem key={i} user={user} />
        ))}
      </div>
    </ScrollArea>
  )
}
