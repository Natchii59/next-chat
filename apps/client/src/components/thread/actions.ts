'use server'

import { ThreadWithFields } from '@/types'
import { Prisma } from '@prisma/client'

import { THREADS_FETCH_COUNT } from '@/lib/constants'
import { db } from '@/lib/db'
import { getCurrentUser } from '@/lib/session'

interface ThreadPaginationResult {
  threads: ThreadWithFields[]
  hasMore: boolean
}

export async function threadsPagination(
  lastId: string,
  where?: Prisma.ThreadWhereInput
): Promise<ThreadPaginationResult> {
  const threads = await db.thread.findMany({
    where: {
      ...where,
      id: {
        lt: lastId
      }
    },
    take: THREADS_FETCH_COUNT,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      author: true,
      likes: {
        select: {
          userId: true
        }
      }
    }
  })

  const hasMore = threads.length === THREADS_FETCH_COUNT

  return {
    threads,
    hasMore
  }
}

interface DeleteThreadResult {
  ok: boolean
}

export async function deleteThread(
  threadId: string
): Promise<DeleteThreadResult> {
  try {
    const currentUser = await getCurrentUser()

    await db.thread.delete({
      where: {
        id: threadId,
        authorId: currentUser.id
      }
    })

    return { ok: true }
  } catch (error) {
    console.error(error)
    return { ok: false }
  }
}

interface LikeThreadResult {
  ok: boolean
}

export async function likeThread(
  threadId: string,
  isLiked: boolean
): Promise<LikeThreadResult> {
  try {
    const currentUser = await getCurrentUser()

    if (isLiked) {
      await db.threadLike.delete({
        where: {
          threadId_userId: {
            threadId,
            userId: currentUser.id
          }
        }
      })
    } else {
      await db.threadLike.create({
        data: {
          threadId,
          userId: currentUser.id
        }
      })
    }

    return { ok: true }
  } catch (error) {
    console.error(error)
    return { ok: false }
  }
}
