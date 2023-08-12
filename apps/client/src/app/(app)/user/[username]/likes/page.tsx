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
      likes: {
        some: {
          user: {
            username
          }
        }
      }
      // author: {
      //   username: {
      //     not: username
      //   }
      // }
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

interface UserLikesPageProps {
  params: {
    username: string
  }
}

export default async function UserLikesPage({ params }: UserLikesPageProps) {
  const threads = await getThreads(params.username)
  const currentUser = await getCurrentUser()

  return (
    <ThreadsList
      baseThreads={threads}
      currentUser={currentUser}
      whereOptionsPagination={{
        likes: {
          every: {
            user: {
              username: params.username
            }
          }
        },
        author: {
          username: {
            not: params.username
          }
        }
      }}
      noThreadsText='This user has no likes yet.'
    />
  )
}
