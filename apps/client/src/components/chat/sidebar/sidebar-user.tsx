import Link from 'next/link'
import { buttonVariants, cn } from 'ui'

interface SidebarUserProps {
  user: {
    id: number
    name: string
  }
}

export default function SidebarUser({ user }: SidebarUserProps) {
  return (
    <Link
      href={`/chat/${user.id}`}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'rounded-md px-4 py-2'
      )}
    >
      {user.name}
    </Link>
  )
}
