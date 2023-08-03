import { buttonVariants, cn, DropdownMenu, DropdownMenuTrigger } from 'ui'

import { UserAvatar } from '@/components/user-avatar'
import { getCurrentUser } from '@/lib/session'

import { AccountDropdownContent } from './account-dropdown-content'

export async function AccountDropdown() {
  const currentUser = await getCurrentUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(buttonVariants({ size: 'icon', variant: 'outline' }))}
      >
        <UserAvatar user={currentUser} />
      </DropdownMenuTrigger>

      <AccountDropdownContent user={currentUser} />
    </DropdownMenu>
  )
}
