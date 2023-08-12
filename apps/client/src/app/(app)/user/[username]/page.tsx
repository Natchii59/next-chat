import { ThreadsList } from '@/components/thread/threads-list'
import { THREADS_FETCH_COUNT } from '@/lib/constants'
import { db } from '@/lib/db'
import { getCurrentUser } from '@/lib/session'

export const fetchCache = 'force-no-store'

async function getThreads(username: string) {
  const data = await db.thread.findMany({
    where: {
      createdAt: {
        lte: new Date()
      },
      author: {
        username
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

  return data
}

interface UserPageProps {
  params: {
    username: string
  }
}

export default async function UserPage({ params }: UserPageProps) {
  const threads = await getThreads(params.username)
  const currentUser = await getCurrentUser()

  return (
    <ThreadsList
      baseThreads={threads}
      currentUser={currentUser}
      whereOptionsPagination={{
        author: {
          username: params.username
        }
      }}
      noThreadsText='This user has no threads yet.'
    />
  )
}
