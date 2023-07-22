import {
  buttonVariants,
  cn,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from 'ui'

import { Icons } from '@/components/icons'
import { UserAvatar } from '@/components/user-avatar'

import { ThemeModeToggle } from './theme-mode-toggle'

async function getAccount() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    name: 'John Doe',
    image: undefined
  }
}

export async function AccountDropdown() {
  const account = await getAccount()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: 'secondary' }),
          'group h-auto justify-start gap-2'
        )}
      >
        <UserAvatar user={account} className='h-9 w-9' />
        <span className='flex-auto text-left'>{account.name}</span>
        <Icons.moreHorizontal className='h-4 w-4' />
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-[var(--radix-dropdown-menu-trigger-width)]'>
        <ThemeModeToggle />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icons.settings className='mr-2 h-4 w-4' />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='text-red-500 focus:text-red-500'>
          <Icons.logout className='mr-2 h-4 w-4' />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
