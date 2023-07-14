export default async function ChatPage() {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return <div>Chat</div>
}
