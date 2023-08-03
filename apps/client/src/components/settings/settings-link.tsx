import Link from 'next/link'
import { buttonVariants, cn } from 'ui'

import { Icons } from '../icons'
import type { SettingsLink as SettingsLinkType } from './appbar/datas'

interface SettingsLinkProps {
  link: SettingsLinkType
}

export function SettingsLink({ link }: SettingsLinkProps) {
  return (
    <Link
      href={link.href}
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'relative flex h-auto flex-col items-start justify-start gap-1 p-3 font-normal'
      )}
    >
      <h3 className='flex items-center gap-2 text-lg font-semibold leading-none'>
        <link.icon className='h-[18px] w-[18px]' />
        <span>{link.title}</span>
      </h3>
      <p className='text-sm text-muted-foreground'>{link.description}</p>

      <Icons.chevronRight className='absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground' />
    </Link>
  )
}
