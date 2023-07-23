import { NavbarChat } from '@/components/chat/navbar'

interface ChatLayoutProps {
  params: {
    chatId: string
  }
}

export default function ChatLayout({
  children,
  params
}: React.PropsWithChildren<ChatLayoutProps>) {
  return (
    <div className='flex h-full max-h-screen flex-col'>
      <NavbarChat chatId={params.chatId} />

      {children}
    </div>
  )
}
