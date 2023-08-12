import { Skeleton } from 'ui'

export function MutualFollowersLoading() {
  return (
    <div className='grid gap-3'>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className='flex items-center gap-2'>
          <Skeleton className='h-10 w-10' />
          <div className='flex h-full flex-auto flex-col justify-around'>
            <Skeleton className='h-4 w-2/3' />
            <Skeleton className='h-4 w-1/2' />
          </div>
        </div>
      ))}
    </div>
  )
}
