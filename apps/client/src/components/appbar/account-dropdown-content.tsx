'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import {
  cn,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from 'ui'

import { Icons } from '@/components/icons'

import { ThemeModeToggle } from './theme-mode-toggle'

interface AccountDropdownContentProps {
  user: Pick<User, 'name' | 'username'>
}

export function AccountDropdownContent({ user }: AccountDropdownContentProps) {
  const [isSignOutLoading, setIsSignOutLoading] = useState<boolean>(false)

  return (
    <DropdownMenuContent align='end' side='bottom'>
      <DropdownMenuItem asChild>
        <Link
          href={`/user/${user.username}`}
          className={cn(
            'flex min-w-[170px] max-w-[200px] flex-col !items-start justify-center gap-1 leading-tight'
          )}
        >
          <p className='w-full truncate font-medium'>
            {user.name ?? user.username}
          </p>
          {user.name && (
            <p className='w-full truncate text-muted-foreground'>
              {user.username}
            </p>
          )}
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />

      <ThemeModeToggle />
      <DropdownMenuSeparator />

      <DropdownMenuItem asChild>
        <Link href='/settings'>
          <Icons.settings2 className='mr-2 h-4 w-4' />
          <span>Settings</span>
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={e => {
          e.preventDefault()
          setIsSignOutLoading(true)
          signOut({ callbackUrl: '/login' })
        }}
        className='text-red-500 focus:text-red-500'
      >
        {isSignOutLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.logout className='mr-2 h-4 w-4' />
        )}
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
