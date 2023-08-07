'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from 'ui'

import { ButtonTooltip } from '@/components/button-tooltip'
import { Icons } from '@/components/icons'

import { NewThreadForm } from './new-thread-form'

export function NewThreadDialog() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className='fixed bottom-0 left-0 z-50 w-full'>
        <div className='container relative'>
          <ButtonTooltip
            size='icon'
            className='float-right mb-2'
            button={<Icons.plus className='h-4 w-4' />}
            tooltip='New Thread'
            onClick={() => setOpen(true)}
          />
        </div>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Thread</DialogTitle>
          <DialogDescription>
            Write a new thread to share with your followers.
          </DialogDescription>
        </DialogHeader>

        <NewThreadForm />
      </DialogContent>
    </Dialog>
  )
}
