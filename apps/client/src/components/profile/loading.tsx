import { Skeleton } from 'ui'

export function ProfileLoading() {
  return (
    <div className='grid gap-3'>
      <div className='flex items-center justify-between'>
        <div className='flex h-full w-full flex-col justify-around'>
          <Skeleton className='h-7 w-1/3' />
          <Skeleton className='h-6 w-1/4' />
        </div>

        <Skeleton className='h-16 w-16 shrink-0' />
      </div>

      <Skeleton className='h-6 w-3/4' />

      <Skeleton className='h-6 w-1/4' />

      <div className='flex items-center gap-2'>
        <Skeleton className='h-9 w-full' />
        <Skeleton className='h-9 w-full' />
        <Skeleton className='h-9 w-9 shrink-0' />
      </div>
    </div>
  )
}
