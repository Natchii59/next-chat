import { Suspense } from 'react'

import { Profile } from '@/components/profile'
import { ProfileLoading } from '@/components/profile/loading'

interface UserLayoutProps {
  params: {
    username: string
  }
}

export default function UserLayout({
  params,
  children
}: React.PropsWithChildren<UserLayoutProps>) {
  return (
    <>
      <Suspense fallback={<ProfileLoading />}>
        <Profile username={params.username} />
      </Suspense>

      <div className='mt-4'>{children}</div>
    </>
  )
}
