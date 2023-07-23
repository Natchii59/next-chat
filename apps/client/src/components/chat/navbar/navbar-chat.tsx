import { UserAvatar } from '@/components/user-avatar'

import { NavbarChatOptions } from './navbar-options'

interface NavbarChatProps {
  chatId: string
}

async function getNavbarChatData(chatId: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    id: chatId,
    user: {
      name: 'John Doe'
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
