'use client'

import { Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import { Thread, User } from '@prisma/client'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  toast
} from 'ui'

import { Icons } from '../icons'
import { deleteThread } from './actions'

interface ThreadActionsDropdownProps {
  thread: Thread & { author: User }
  isCurrentUser?: boolean
  setIsDeleted: Dispatch<SetStateAction<boolean>>
}

export function ThreadActionsDropdown({
  thread,
  isCurrentUser,
  setIsDeleted
}: ThreadActionsDropdownProps) {
  const [open, setOpen] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const handleDelete = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setDeleteLoading(true)

    const result = await deleteThread(thread.id)

    setDeleteLoading(false)

    if (!result.ok) {
      return toast({
        title: 'Something went wrong',
        description: 'Your thread could not be deleted.',
        variant: 'destructive'
      })
    }

    setOpen(false)
    setIsDeleted(true)

    toast({
      title: 'Thread deleted',
      description: 'Your thread has been deleted.'
    })
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='h-5 w-5'
          onClick={e => e.stopPropagation()}
        >
          <Icons.moreHorizontal className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' side='bottom' className='max-w-[270px]'>
        {isCurrentUser && (
          <DropdownMenuItem
            className='text-red-500 focus:text-red-500'
            onClick={handleDelete}
          >
            {deleteLoading ? (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              <Icons.trash className='mr-2 h-4 w-4' />
            )}
            <span>Delete</span>
          </DropdownMenuItem>
        )}

        {!isCurrentUser && (
          <>
            <DropdownMenuItem>
              <Icons.userPlus className='mr-2 h-4 w-4' />
              <span className='truncate'>Follow {thread.author.username}</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Icons.userX className='mr-2 h-4 w-4' />
              <span className='truncate'>Block {thread.author.username}</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
