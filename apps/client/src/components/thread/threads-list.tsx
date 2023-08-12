'use client'

import { useState } from 'react'
import { ThreadWithFields } from '@/types'
import { Prisma, User } from '@prisma/client'
import InfiniteScroll from 'react-infinite-scroll-component'

import { THREADS_FETCH_COUNT } from '@/lib/constants'

import { threadsPagination } from './actions'
import { ThreadLoading } from './loading'
import { ThreadItem } from './thread-item'

export interface NextPaginationResult {
  threads: ThreadWithFields[]
  hasMore: boolean
}

interface ThreadsListProps {
  baseThreads: ThreadWithFields[]
  currentUser: Pick<User, 'id'>
  whereOptionsPagination?: Prisma.ThreadWhereInput
  noThreadsText?: string
}

export function ThreadsList({
  baseThreads,
  currentUser,
  whereOptionsPagination,
  noThreadsText
}: ThreadsListProps) {
  const [threads, setThreads] = useState<ThreadWithFields[]>(baseThreads)
  const [hasMore, setHasMore] = useState<boolean>(
    baseThreads.length === THREADS_FETCH_COUNT
  )

  const handleNextThreads = async () => {
    const { threads: nextThreads, hasMore: nextHasMore } =
      await threadsPagination(
        threads[threads.length - 1].id,
        whereOptionsPagination
      )

    if (!nextHasMore) setHasMore(false)
    setThreads(oldThreads => [...oldThreads, ...nextThreads])
  }

  if (!threads.length)
    return (
      <p className='text-center'>{noThreadsText ?? 'No threads to show'}</p>
    )

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
