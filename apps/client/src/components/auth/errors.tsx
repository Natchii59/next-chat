import Link from 'next/link'

import { Icons } from '../icons'

export function AuthDefaultError() {
  return (
    <div className='container flex flex-col items-center justify-center gap-y-4 text-center'>
      <Icons.xCircle className='h-16 w-16' />

      <h1 className='font-heading text-3xl sm:text-4xl'>
        Something went wrong.
      </h1>
      <h2 className='text-2xl font-medium tracking-tight'>Please try again.</h2>

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

export function AuthEmailError() {
  return (
    <div className='container flex flex-col items-center justify-center gap-y-4 text-center'>
      <Icons.xCircle className='h-16 w-16' />

      <h1 className='font-heading text-3xl sm:text-4xl'>
        This link is invalid.
      </h1>
      <h2 className='text-2xl font-medium tracking-tight'>
        It may have already been used or expired.
      </h2>

      <p>
        You can resend a Magic Link in your mailbox in the{' '}
        <Link
          href='/sign-in'
          className='font-semibold underline-offset-2 hover:underline'
        >
          sign in page
        </Link>
        .
      </p>
    </div>
  )
}
