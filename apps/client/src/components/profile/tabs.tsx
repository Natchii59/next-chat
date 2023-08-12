'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { buttonVariants, cn } from 'ui'

const datas = [
  {
    name: 'Threads'
  },
  {
    name: 'Likes',
    value: 'likes'
  }
]

export function ProfileTabs() {
  const pathname = usePathname()
  const params = useParams()

  return (
    <div className='mt-2 flex items-center'>
      {datas.map((data, i) => (
        <Link
          prefetch={false}
          key={i}
          href={`/user/${params.username}${data.value ? `/${data.value}` : ''}`}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'w-full rounded-b-none border-b px-0 py-2 text-center',
            pathname ===
              `/user/${params.username}${data.value ? `/${data.value}` : ''}` &&
              'border-primary'
          )}
        >
          {data.name}
        </Link>
      ))}
    </div>
  )
}
