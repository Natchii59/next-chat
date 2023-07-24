import { ScrollArea } from 'ui'

export default function FriendsListLayout({
  children
}: React.PropsWithChildren) {
  return (
    <ScrollArea className='flex-auto px-4 py-2'>
      <ul className='flex flex-col gap-2'>{children}</ul>
    </ScrollArea>
  )
}
