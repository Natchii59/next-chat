import { NavbarFriends } from '@/components/friends/navbar/navbar-friends'

export default function FriendsLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='flex h-full max-h-screen flex-col'>
      <NavbarFriends />

      {children}
    </div>
  )
}
