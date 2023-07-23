import { ScrollArea } from 'ui'

import { MessageItem } from './message-item'

interface Message {
  id: number
  content: string
  createdAt: Date
  sender: {
    id: number
    name: string
  }
}

interface MessagesListProps {
  messages: Message[]
}

export function MessagesList({ messages }: MessagesListProps) {
  return (
    <ScrollArea className='flex-auto p-2'>
      <ul className='flex flex-col gap-3'>
        {messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))}
      </ul>
    </ScrollArea>
  )
}
