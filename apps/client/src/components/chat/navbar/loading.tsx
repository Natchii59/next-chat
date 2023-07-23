import { Skeleton } from 'ui'

export function NavbarChatLoading() {
  return (
    <>
      <Skeleton className='h-8 w-8 rounded-full' />

      <div className='flex-auto'>
        <Skeleton className='h-4 w-1/4' />
      </div>

      <Skeleton className='h-8 w-8 rounded-md' />
    </>
  )
}
