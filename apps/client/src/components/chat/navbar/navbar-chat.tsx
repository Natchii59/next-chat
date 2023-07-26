import type { User } from '@prisma/client'

import { UserAvatar } from '@/components/user-avatar'

import { NavbarChatOptions } from './navbar-options'

interface NavbarChatProps {
  chatId: string
}

interface NavbarChatData {
  id: string
  user: Pick<User, 'name' | 'image'>
}

async function getNavbarChatData(chatId: string): Promise<NavbarChatData> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    id: chatId,
    user: {
      name: 'John Doe',
      image: null
    }
  }
}

export async function NavbarChatData({ chatId }: NavbarChatProps) {
  const chat = await getNavbarChatData(chatId)

  return (
    <>
      <UserAvatar user={chat.user} className='h-8 w-8' />

      <span className='flex-auto font-semibold'>{chat.user.name}</span>

      <NavbarChatOptions />
    </>
  )
}
