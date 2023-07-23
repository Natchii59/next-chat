import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from 'ui'

import { Icons } from '@/components/icons'

export function NavbarChatOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon' className='h-8 w-8'>
          <Icons.moreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side='bottom' align='end'>
        <DropdownMenuItem disabled>Mark as read</DropdownMenuItem>
        <DropdownMenuItem>Close DM</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
