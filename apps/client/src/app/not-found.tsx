import Link from 'next/link'
import { buttonVariants, cn } from 'ui'

import { Icons } from '@/components/icons'

export default function NotFound() {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center gap-4'>
      <Icons.xCircle className='h-28 w-28' />
      <h1 className='text-4xl font-semibold tracking-tight'>404</h1>
      <p className='text-sm text-muted-foreground'>Page not found</p>
      <Link href='/' className={cn(buttonVariants({ variant: 'outline' }))}>
        Go back home
      </Link>
    </div>
  )
}
