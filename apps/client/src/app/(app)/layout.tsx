import { Appbar } from '@/components/appbar'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='container relative'>
      <Appbar />

      <main className='pt-16'>{children}</main>
    </div>
  )
}
