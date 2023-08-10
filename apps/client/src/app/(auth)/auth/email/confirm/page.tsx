import Link from 'next/link'

import { Icons } from '@/components/icons'
import { getCurrentUser } from '@/lib/session'

export default async function EmailConfirmPage() {
  await getCurrentUser()

  return (
    <div className='container flex flex-col items-center justify-center gap-y-4 text-center'>
      <Icons.checkCircle className='h-16 w-16' />

      <h1 className='font-heading text-4xl'>You&apos;re logged in!</h1>
      <h2 className='text-2xl font-medium tracking-tight'>
        Go back to your original tab.
      </h2>

      <p>
        You can close this window or click this{' '}
        <Link
          href='/'
          className='font-semibold underline-offset-2 hover:underline'
        >
          link
        </Link>{' '}
        to go back to the homepage.
      </p>
    </div>
  )
}
