import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Button,
  cn,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from 'ui'

import { db } from '@/lib/db'
import { formatNumber } from '@/lib/utils'

import { UserAvatar } from '../user-avatar'
import { MutualFollowersDialog } from './mutual-followers-dialog'
import { ProfileDropdown } from './profile-dropdown'
import { ProfileTabs } from './tabs'

async function getUser(username: string) {
  const user = await db.user.findUnique({
    where: {
      username
    }
  })

  if (!user) notFound()

  return user
}

interface ProfileProps {
  username: string
}

export async function Profile({ username }: ProfileProps) {
  const user = await getUser(username)

  return (
    <div className='grid gap-3'>
      <div className='flex items-center justify-between gap-2 truncate'>
        <div className='flex h-full flex-col justify-center truncate'>
          <h1 className='truncate font-heading text-2xl tracking-wide sm:text-3xl'>
            {user.name ?? user.username}
          </h1>
          {user.name && <h2 className='truncate text-lg'>{user.username}</h2>}
        </div>

        <UserAvatar user={user} className='h-16 w-16' classNameIcon='h-7 w-7' />
      </div>

      {user.bio && (
        <p className='w-full min-w-0 whitespace-pre-line break-words'>
          {user.bio}
        </p>
      )}

      <div className='flex items-center gap-1'>
        <div className='relative flex'>
          <TooltipProvider disableHoverableContent>
            {Array.from({ length: 3 }).map((_, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <Link href={`/user/${user.username}`}>
                    <UserAvatar
                      user={user}
                      className={cn(
                        'h-7 w-7 rounded-full border border-background',
                        i > 0 && '-ml-2'
                      )}
                      classNameIcon='h-3 w-3'
                    />
                  </Link>
                </TooltipTrigger>

                <TooltipContent className='px-1 py-0.5'>
                  {user.username}
                </TooltipContent>
              </Tooltip>
            ))}

            <MutualFollowersDialog user={user} />
          </TooltipProvider>
        </div>
        <p className='text-sm text-muted-foreground'>
          {formatNumber(1234)} followers
        </p>
      </div>

      <div className='flex items-center gap-2'>
        <Button size='sm' className='w-full'>
          Follow
        </Button>

        <Button size='sm' variant='outline' className='w-full' disabled>
          Message
        </Button>

        <ProfileDropdown />
      </div>

      <ProfileTabs />
    </div>
  )
}
