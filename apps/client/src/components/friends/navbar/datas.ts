export interface NavbarFriendsLink {
  id: string
  name: string
  href: string
  primary?: boolean
}

export const links: NavbarFriendsLink[] = [
  { id: 'all', name: 'All friends', href: '/friends/all' },
  { id: 'request', name: 'Request', href: '/friends/request' },
  { id: 'pending', name: 'Pending', href: '/friends/pending' },
  { id: 'blocked', name: 'Blocked', href: '/friends/blocked' },
  { id: 'add', name: 'Add friend', href: '/friends/add', primary: true }
]
