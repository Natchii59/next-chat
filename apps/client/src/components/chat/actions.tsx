'use server'

import type { User } from '@prisma/client'

interface Message {
  id: number
  content: string
  createdAt: Date
  sender: Pick<User, 'id' | 'username' | 'name' | 'image'>
}

export async function loadMoreMessages(lastId: number): Promise<Message[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Array.from({ length: 10 }, (_, i) => ({
    id: i + lastId,
    content: `Message ${i + lastId}`,
    createdAt: new Date(),
    sender: {
      id: `${(i + lastId) % 2}`,
      username: (i + lastId) % 2 ? 'johndoe' : 'janedoe',
      name: (i + lastId) % 2 ? 'John Doe' : 'Jane Doe',
      image: null
    }
  }))
}
