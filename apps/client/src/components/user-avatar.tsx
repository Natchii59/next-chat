import { Avatar, AvatarFallback, AvatarImage, AvatarProps, cn } from 'ui'

import { Icons } from '@/components/icons'

interface UserAvatarProps extends AvatarProps {
  classNameImage?: string
  classNameFallback?: string
  classNameIcon?: string
  user: {
    name: string
    image?: string
  }
}

export function UserAvatar({
  user,
  classNameImage,
  classNameFallback,
  classNameIcon,
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
          <Icons.user className={cn('h-4 w-4', classNameIcon)} />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
