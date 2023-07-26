import type { User } from '@prisma/client'

import { ChatInput } from '@/components/chat/chat-input'
import { MessagesList } from '@/components/chat/messages-list'

interface Props {
  params: {
    chatId: string
  }
}

interface Message {
  id: number
  content: string
  createdAt: Date
  sender: Pick<User, 'id' | 'username' | 'name' | 'image'>
}

async function getUser(): Promise<
  Pick<User, 'id' | 'username' | 'name' | 'image'>
> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    id: '1',
    username: 'johndoe',
    name: 'John Doe',
    image: null
  }
}

async function getMessages(): Promise<Message[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    content: `Message ${i}`,
    createdAt: new Date(),
    sender: {
      id: `${i % 2}`,
      username: i % 2 ? 'johndoe' : 'janedoe',
      name: i % 2 ? 'John Doe' : 'Jane Doe',
      image: null
    }
  }))
}

export default async function ChatPage({}: Props) {
  const user = await getUser()
  const messages = await getMessages()

  return (
    <>
      <MessagesList user={user} baseMessages={messages} />

      <div className='p-2 pt-0'>
        <ChatInput />

        <div className='flex h-4 pt-1'>
          <span className='text-xs'>John Doe is typing...</span>
        </div>
      </div>
    </>
  )
}
