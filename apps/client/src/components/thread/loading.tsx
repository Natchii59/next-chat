import { Skeleton } from 'ui'

export function ThreadLoading() {
  return (
    <div className='flex items-start gap-2 p-2.5'>
      <Skeleton className='h-10 w-10' />

      <div className='flex h-full flex-auto flex-col justify-around'>
        <Skeleton className='h-4 w-1/2' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    </div>
  )
}
