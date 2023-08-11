'use client'

import { useState } from 'react'
import { ThreadWithFields } from '@/types'
import { User } from '@prisma/client'
import InfiniteScroll from 'react-infinite-scroll-component'

import { THREADS_FETCH_COUNT } from '@/lib/constants'

import { threadPagination } from './actions'
import { ThreadLoading } from './loading'
import { ThreadItem } from './thread-item'

interface ThreadsListProps {
  baseThreads: ThreadWithFields[]
  currentUser: Pick<User, 'id'>
}

export function ThreadsList({ baseThreads, currentUser }: ThreadsListProps) {
  const [threads, setThreads] = useState<ThreadWithFields[]>(baseThreads)
  const [hasMore, setHasMore] = useState<boolean>(
    baseThreads.length === THREADS_FETCH_COUNT
  )

  const handleNextThreads = async () => {
    const { threads: nextThreads, hasMore: nextHasMore } =
      await threadPagination(threads[threads.length - 1].id)

    if (!nextHasMore) setHasMore(false)
    setThreads(oldThreads => [...oldThreads, ...nextThreads])
  }

  if (!threads.length) return <p className='text-center'>No threads</p>

  return (
    <InfiniteScroll
      dataLength={threads.length}
      next={handleNextThreads}
      hasMore={hasMore}
      loader={<ThreadLoading />}
      className='grid gap-4'
    >
      {threads.map(thread => (
        <ThreadItem key={thread.id} thread={thread} currentUser={currentUser} />
      ))}
    </InfiniteScroll>
  )
}
