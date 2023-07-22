'use client'

import { Button, Input, Label } from 'ui'

export default function AddFriendPage() {
  return (
    <div className='space-y-1.5'>
      <Label htmlFor='username'>Add friend by username</Label>
      <div className='flex items-center gap-2'>
        <Input type='text' id='username' placeholder='Username' />
        <Button>Add</Button>
      </div>
    </div>
  )
}
