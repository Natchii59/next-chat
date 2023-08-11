'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ThreadWithFields } from '@/types'
import { User } from '@prisma/client'
import { Card, cn } from 'ui'

import { formatDate } from '@/lib/date'
import { useMounted } from '@/hooks/use-mounted'

import { UserAvatar } from '../user-avatar'
import { ThreadLoading } from './loading'
import { ThreadActionsButtons } from './thread-actions-buttons'
import { ThreadActionsDropdown } from './thread-actions-dropdown'

interface ThreadItemProps {
  thread: ThreadWithFields
  currentUser: Pick<User, 'id'>
}

export function ThreadItem({ thread, currentUser }: ThreadItemProps) {
  const mounted = useMounted()
  const router = useRouter()

  const [isDeleted, setIsDeleted] = useState<boolean>(false)

  if (!mounted) return <ThreadLoading />

  return (
    <Card
      className={cn(
        'flex max-w-full cursor-pointer items-start gap-2 overflow-hidden rounded-md p-2 text-sm',
        isDeleted && 'hidden'
      )}
      onClick={() => {
        router.push(`/thread/${thread.id}`)
      }}
    >
      <Link
        href={`/user/${thread.author.username}`}
        onClick={e => e.stopPropagation()}
      >
        <UserAvatar user={thread.author} />
      </Link>

      <div className='min-w-0 flex-auto'>
        <div className='flex items-center gap-2'>
          <div className='flex-auto truncate'>
            <Link
              href={`/user/${thread.author.username}`}
              onClick={e => e.stopPropagation()}
              className='z-10 font-semibold underline-offset-2 hover:underline'
            >
              {thread.author.username}
            </Link>
          </div>

          <p className='whitespace-nowrap text-muted-foreground'>
            {formatDate(thread.createdAt, new Date())}
          </p>

          <ThreadActionsDropdown
            thread={thread}
            isCurrentUser={thread.author.id === currentUser.id}
            setIsDeleted={setIsDeleted}
          />
        </div>

        <p className='w-full min-w-0 whitespace-pre-line break-words'>
          {thread.text}
        </p>

        <ThreadActionsButtons thread={thread} currentUser={currentUser} />
      </div>
    </Card>
  )
}
