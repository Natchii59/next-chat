import { Suspense } from 'react'

import { NavbarChatLoading } from './loading'
import { NavbarChatData } from './navbar-chat'

interface NavbarChatProps {
  chatId: string
}

export function NavbarChat({ chatId }: NavbarChatProps) {
  return (
    <nav className='flex items-center gap-2 rounded-md border-b px-4 py-2'>
      <Suspense fallback={<NavbarChatLoading />}>
        <NavbarChatData chatId={chatId} />
      </Suspense>
    </nav>
  )
}
