interface Props {
  params: {
    chatId: string
  }
}

export default function ChatPage({ params }: Props) {
  return <div>Chat {params.chatId}</div>
}
