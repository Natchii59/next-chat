import { buttonVariants, cn } from 'ui'

import { links } from './datas'

export function NavbarLinksLoading() {
  return (
    <>
      {links.map((link, index) => (
        <span
          key={index}
          className={cn(
            buttonVariants({
              variant: link.primary ? 'default' : 'ghost',
              size: 'sm'
            }),
            'h-auto cursor-pointer py-1.5'
          )}
        >
          {link.name}
        </span>
      ))}
    </>
  )
}
