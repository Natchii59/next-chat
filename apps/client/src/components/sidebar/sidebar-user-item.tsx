import Link from 'next/link'
import { buttonVariants, cn } from 'ui'

import { UserAvatar } from '@/components/user-avatar'

interface SidebarUserProps {
  user: {
    id: number
    name: string
  }
}

export function SidebarUserItem({ user }: SidebarUserProps) {
  return (
    <Link
      href={`/chat/${user.id}`}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'h-auto w-full justify-start px-2 py-px'
      )}
    >
      <UserAvatar user={user} className='mr-2' />

      <span>{user.name}</span>
    </Link>
  )
}
