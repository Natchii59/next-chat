import { Skeleton } from 'ui'

function UserSkeleton() {
  return (
    <div className='flex w-full items-center gap-2 px-3 py-1.5'>
      <Skeleton className='h-10 w-10 rounded-full' />
      <Skeleton className='h-4 w-2/3' />
    </div>
  )
}

export default function FriendsLoading() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <UserSkeleton key={index} />
      ))}
    </>
  )
}
