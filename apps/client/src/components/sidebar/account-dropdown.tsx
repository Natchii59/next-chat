import { buttonVariants, cn, DropdownMenu, DropdownMenuTrigger } from 'ui'

import { Icons } from '@/components/icons'
import { UserAvatar } from '@/components/user-avatar'
import { getCurrentUser } from '@/lib/session'

import { AccountDropdownContent } from './account-dropdown-content'

export async function AccountDropdown() {
  const currentUser = await getCurrentUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: 'secondary' }),
          'group h-auto justify-start gap-2'
        )}
      >
        <UserAvatar user={currentUser} />
        <div className='flex flex-auto flex-col items-start'>
          {currentUser.name?.length ? (
            <>
              <span className='font-semibold'>{currentUser.name}</span>
              <span className='text-xs text-muted-foreground'>
                {currentUser.username}
              </span>
            </>
          ) : (
            <span>{currentUser.username}</span>
          )}
        </div>
        <Icons.moreHorizontal className='h-4 w-4' />
      </DropdownMenuTrigger>

      <AccountDropdownContent />
    </DropdownMenu>
  )
}
