import { redirect } from 'next/navigation'
import { env } from '@/env.mjs'
import { getServerSession } from 'next-auth'

import { AuthForm } from '@/components/auth/auth-form'

export default async function LoginPage() {
  const session = await getServerSession()

  if (session) redirect('/')

  return (
    <div className='container flex flex-col justify-center gap-y-6'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='text-sm text-muted-foreground'>
          Enter your email to sign in to your account
        </p>
      </div>

      <AuthForm isPreviewMode={env.VERCEL_ENV === 'preview'} />
    </div>
  )
}
