'use client'

import { useTheme } from 'next-themes'
import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from 'ui'

import { Icons } from '@/components/icons'

export function ThemeModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        {theme === 'dark' ? (
          <Icons.moon className='mr-2 h-4 w-4' />
        ) : theme === 'light' ? (
          <Icons.sun className='mr-2 h-4 w-4' />
        ) : (
          <Icons.laptop className='mr-2 h-4 w-4' />
        )}
        <span>Theme</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value='light'>
              <Icons.sun className='mr-2 h-4 w-4' />
              <span>Light</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='dark'>
              <Icons.moon className='mr-2 h-4 w-4' />
              <span>Dark</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='system'>
              <Icons.laptop className='mr-2 h-4 w-4' />
              <span>System</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}
