'use client'

import { MouseEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ThreadWithFields } from '@/types'
import { User } from '@prisma/client'
import { Button, cn, toast } from 'ui'

import { formatNumber } from '@/lib/utils'

import { Icons } from '../icons'
import { likeThread } from './actions'

interface ThreadActionsButtonsProps {
  thread: Pick<ThreadWithFields, 'id' | 'likes'>
  currentUser: Pick<User, 'id'>
}

export function ThreadActionsButtons({
  thread,
  currentUser
}: ThreadActionsButtonsProps) {
  const router = useRouter()
  const [isLiked, setIsLiked] = useState<boolean>(
    thread.likes.some(l => l.userId === currentUser.id)
  )
  const [likesCount, setLikesCount] = useState<number>(thread.likes.length)
  const [likeLoading, setLikeLoading] = useState<boolean>(false)

  const handleLike = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    setLikeLoading(true)

    const result = await likeThread(thread.id, isLiked)

    if (!result.ok) {
      setLikeLoading(false)

      return toast({
        title: 'Something went wrong',
        description: 'Your like was not saved. Please try again later.',
        variant: 'destructive'
      })
    }

    setIsLiked(like => !like)
    setLikesCount(count => (isLiked ? count - 1 : count + 1))

    setLikeLoading(false)

    router.refresh()
  }

  return (
    <div className='flex items-center justify-between pt-2 sm:w-2/3'>
      <Button
        variant='ghost'
        size='icon'
        className='group relative h-6 w-6 font-normal leading-none'
        onClick={handleLike}
      >
        {likeLoading ? (
          <Icons.spinner className='h-4 w-4 animate-spin' />
        ) : (
          <Icons.heart
            className={cn('h-4 w-4', isLiked && 'fill-red-500 text-red-500')}
          />
        )}
        {likesCount > 0 && (
          <span
            className={cn(
              'absolute left-7',
              isLiked ? 'font-medium' : 'group-hover:font-medium'
            )}
          >
            {formatNumber(likesCount)}
          </span>
        )}
      </Button>

      <Button
        variant='ghost'
        size='icon'
        className='relative h-6 w-6 font-normal leading-none'
      >
        <Icons.message className='h-4 w-4' />
      </Button>

      <Button
        variant='ghost'
        size='icon'
        className='relative h-6 w-6 font-normal leading-none'
      >
        <Icons.repeat className='h-4 w-4' />
      </Button>

      <Button variant='ghost' size='icon' className='h-6 w-6'>
        <Icons.send className='h-4 w-4' />
      </Button>
    </div>
  )
}
