import { Avatar, AvatarFallback, AvatarImage, AvatarProps, cn } from 'ui'

import { Icons } from '@/components/icons'

interface UserAvatarProps extends AvatarProps {
  classNameImage?: string
  classNameFallback?: string
  user: {
    name: string
    image?: string
  }
}

export function UserAvatar({
  user,
  classNameImage,
  classNameFallback,
  ...props
}: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage
          alt='Picture'
          src={user.image}
          className={cn(classNameImage)}
        />
      ) : (
        <AvatarFallback className={cn(classNameFallback)}>
          <span className='sr-only'>{user.name}</span>
          <Icons.user className='h-4 w-4' />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
