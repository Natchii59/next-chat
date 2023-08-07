'use server'

import { THREADS_FETCH_COUNT } from '@/lib/constants'
import { db } from '@/lib/db'
import { getCurrentUser } from '@/lib/session'

export async function threadPagination(lastId: string) {
  console.log('pagination called')
  const threads = await db.thread.findMany({
    where: {
      id: {
        lt: lastId
      }
    },
    take: THREADS_FETCH_COUNT,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      author: true
    }
  })

  const hasMore = threads.length === THREADS_FETCH_COUNT

  return {
    threads,
    hasMore
  }
}

interface PostThreadResult {
  ok: boolean
}

export async function deleteThread(
  threadId: string
): Promise<PostThreadResult> {
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
    console.log(error)
    return { ok: false }
  }
}
