import { Skeleton } from 'ui'

function UserSkeleton() {
  return (
    <div className='flex w-full items-center gap-2 px-2 py-px'>
      <Skeleton className='h-10 w-10 rounded-full' />
      <Skeleton className='h-4 w-2/3' />
    </div>
  )
}

export function SidebarUsersLoading() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <UserSkeleton key={index} />
      ))}
    </>
  )
}

export function AccountDropdownLoading() {
  return <Skeleton className='h-13 w-full' />
}
