import { Suspense } from 'react'
import { User } from '@prisma/client'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from 'ui'

import { Icons } from '../../icons'
import { MutualFollowersLoading } from './loading'
import { MutualFollowersList } from './mutual-followers-list'

interface MutualFollowersDialogProps {
  user: Pick<User, 'id' | 'username'>
}

export function MutualFollowersDialog({ user }: MutualFollowersDialogProps) {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              size='icon'
              variant='secondary'
              className='z-10 -ml-2 h-7 w-7 rounded-full border border-background'
            >
              <Icons.moreHorizontal className='h-3 w-3' />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>

        <TooltipContent className='px-1 py-0.5'>See more</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className='tracking-wide'>Mutual followers</DialogTitle>
          <DialogDescription>
            This is a list of people who follow you and{' '}
            <span className='font-semibold'>{user.username}</span>
          </DialogDescription>
        </DialogHeader>

        <Suspense fallback={<MutualFollowersLoading />}>
          <MutualFollowersList user={user} />
        </Suspense>
      </DialogContent>
    </Dialog>
  )
}
