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
            'flex min-h-[2rem] w-[170px] flex-col !items-start leading-none'
          )}
        >
          <p className='truncate font-medium'>{user.name ?? user.username}</p>
          {user.name && (
            <p className='truncate text-sm text-muted-foreground'>
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
