'use server'

import { User } from '@prisma/client'

import { db } from '@/lib/db'

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
