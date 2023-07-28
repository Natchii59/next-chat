import { Skeleton } from 'ui'

function ItemLoading() {
  return (
    <div className='space-y-2'>
      <Skeleton className='h-4 w-24' />
      <Skeleton className='h-10' />
    </div>
  )
}

export default function AccountSettingsLoading() {
  return (
    <div className='space-y-8'>
      {Array.from({ length: 5 }).map((_, i) => (
        <ItemLoading key={i} />
      ))}
    </div>
  )
}
