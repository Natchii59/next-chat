import { Skeleton } from 'ui'

function MessageLoading() {
  return (
    <div className='flex items-center gap-2 p-1'>
      <Skeleton className='h-10 w-10 rounded-full' />

      <div className='space-y-1'>
        <Skeleton className='h-4 w-20' />
        <Skeleton className='h-4 w-40' />
      </div>
    </div>
  )
}

export default function ChatLoading() {
  return (
    <ul className='flex flex-col gap-3 p-2'>
      {Array.from({ length: 10 }).map((_, index) => (
        <MessageLoading key={index} />
      ))}
    </ul>
  )
}
