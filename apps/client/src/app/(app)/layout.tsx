import { Appbar } from '@/components/appbar'
import { NewThreadDialog } from '@/components/thread/thread-dialog/new-thread-dialog'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='container relative'>
      <Appbar />

      <main className='pb-14 pt-[4.75rem]'>
        {children}

        <NewThreadDialog />
      </main>
    </div>
  )
}
