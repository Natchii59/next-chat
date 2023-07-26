'use client'

import { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from 'ui'

import { Icons } from '@/components/icons'

import { ThemeModeToggle } from './theme-mode-toggle'

export function AccountDropdownContent() {
  const [isSignOutLoading, setIsSignOutLoading] = useState<boolean>(false)

  return (
    <DropdownMenuContent className='w-[var(--radix-dropdown-menu-trigger-width)]'>
      <ThemeModeToggle />
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <Link href='/settings'>
          <Icons.settings className='mr-2 h-4 w-4' />
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
