import { Appbar } from '@/components/appbar'
import { NewThreadDialog } from '@/components/appbar/new-thread-dialog'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='container relative'>
      <Appbar />

      <main className='pt-16'>
        {children}

        <NewThreadDialog />
      </main>
    </div>
  )
}
