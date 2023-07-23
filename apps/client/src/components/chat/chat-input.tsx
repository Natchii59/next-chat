import { Button, Input } from 'ui'

import { Icons } from '../icons'

export function ChatInput() {
  return (
    <div className='flex items-center gap-2'>
      <Input type='text' placeholder='Type a message...' />

      <Button size='icon'>
        <Icons.send className='h-4 w-4' />
      </Button>
    </div>
  )
}
