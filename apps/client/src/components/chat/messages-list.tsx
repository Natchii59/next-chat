'use client'

import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Skeleton } from 'ui'

import { loadMoreMessages } from './actions'
import { MessageItem } from './message-item'
import { MessagesProfileHeader } from './messages-profile-header'

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
  user: {
    id: number
    name: string
  }
  baseMessages: Message[]
}

export function MessagesList({ user, baseMessages }: MessagesListProps) {
  const [messages, setMessages] = useState<Message[]>(baseMessages)

  return (
    <div
      id='scrollable-messages'
      className='relative flex flex-auto flex-col-reverse overflow-auto p-2'
    >
      <InfiniteScroll
        dataLength={messages.length}
        next={() =>
          loadMoreMessages(messages[messages.length - 1].id + 1).then(
            newMessages => setMessages([...messages, ...newMessages])
          )
        }
        hasMore={messages.length < 80}
        inverse={true}
        loader={<MessageLoading />}
        endMessage={<MessagesProfileHeader user={user} />}
        scrollableTarget='scrollable-messages'
        className='flex flex-col-reverse gap-3'
      >
        {messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))}
      </InfiniteScroll>
    </div>
  )
}

function MessageLoading() {
  return (
    <div className='flex items-center gap-2 p-1'>
      <Skeleton className='h-10 w-10 rounded-full' />

      <div className='space-y-1'>
        <Skeleton className='h-4 w-20' />
        <Skeleton className='h-4 w-40' />
      </div>
    </div>
  )
}
