interface Props {
  sidebar: React.ReactNode
}

export default async function ChatLayout({
  children,
  sidebar
}: React.PropsWithChildren<Props>) {
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-1'>{sidebar}</div>
      <div className='col-span-2'>{children}</div>
    </div>
  )
}
