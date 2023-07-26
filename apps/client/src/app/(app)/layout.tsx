import { Sidebar } from '@/components/sidebar'

export default function ChatLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='grid h-full grid-cols-4'>
      <div className='col-span-1'>
        <Sidebar />
      </div>

      <div className='col-span-3'>{children}</div>
    </div>
  )
}
