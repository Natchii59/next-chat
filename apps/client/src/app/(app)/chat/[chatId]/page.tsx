import { ChatInput } from '@/components/chat/chat-input'
import { MessagesList } from '@/components/chat/messages-list'

interface Props {
  params: {
    chatId: string
  }
}

// eslint-disable-next-line no-unused-vars
async function getMessages(chatId: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [...Array(100)].map((_, i) => ({
    id: i,
    content: `Message ${i}`,
    createdAt: new Date(),
    sender: {
      id: i % 2,
      name: i % 2 ? 'John Doe' : 'Jane Doe'
    }
  }))
}

export default async function ChatPage({ params }: Props) {
  const messages = await getMessages(params.chatId)

  return (
    <>
      <MessagesList messages={messages} />

      <div className='p-2 pt-0'>
        <ChatInput />

        <div className='flex h-4 pt-1'>
          <span className='text-xs'>John Doe is typing...</span>
        </div>
      </div>
    </>
  )
}
