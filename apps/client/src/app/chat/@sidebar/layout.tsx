export default function LayoutSidebar({ children }: React.PropsWithChildren) {
  return (
    <nav className='p-4'>
      <h1 className='font-heading text-2xl'>Next Chat</h1>

      <div className='flex flex-col gap-2'>{children}</div>
    </nav>
  )
}
