import { UserAvatar } from '../user-avatar'

interface Message {
  id: number
  content: string
  createdAt: Date
  sender: {
    id: string
    name: string
  }
}

interface MessagesItemProps {
  message: Message
}

export function MessageItem({ message }: MessagesItemProps) {
  return (
    <div className='flex items-start gap-2 rounded-md p-1 text-sm hover:bg-accent'>
      <UserAvatar user={message.sender} />

      <div>
        <span className='font-semibold'>{message.sender.name}</span>
        <p className='w-full' style={{ wordBreak: 'break-all' }}>
          {message.content}
        </p>
      </div>
    </div>
  )
}
