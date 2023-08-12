'use client'

import { useState } from 'react'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from 'ui'

import { Icons } from '../icons'

export function ProfileDropdown() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='outline' className='h-9 w-9 shrink-0'>
          <Icons.moreVertical className='h-5 w-5' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' side='bottom'>
        <DropdownMenuItem>
          <Icons.bell className='mr-2 h-4 w-4' />
          <span className='truncate'>Enable notifications</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Icons.userMinus className='mr-2 h-4 w-4' />
          <span className='truncate'>Unfollow</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='text-red-500 focus:text-red-500'>
          <Icons.userX className='mr-2 h-4 w-4' />
          <span className='truncate'>Block</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
