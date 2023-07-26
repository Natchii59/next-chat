'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import type { User } from '@prisma/client'
import { buttonVariants, cn } from 'ui'

import { UserAvatar } from '@/components/user-avatar'

interface SidebarUserProps {
  user: Pick<User, 'id' | 'name' | 'username' | 'image'>
}

export function SidebarUserItem({ user }: SidebarUserProps) {
  const params = useParams() as { chatId?: string }

  return (
    <Link
      href={`/chat/${user.id}`}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'h-auto w-full justify-start px-2 py-px',
        params.chatId === user.id && 'bg-accent'
      )}
    >
      <UserAvatar user={user} className='mr-2' />

      <span>{user.name}</span>
    </Link>
  )
}
