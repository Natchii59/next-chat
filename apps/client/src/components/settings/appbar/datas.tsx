import { Icons, IconType } from '../../icons'

export interface SettingsLink {
  title: string
  description: string
  href: string
  icon: IconType
}

export const settingsLinks: SettingsLink[] = [
  {
    title: 'Profile',
    description: 'Change your profile information',
    href: '/settings/profile',
    icon: Icons.user
  },
  {
    title: 'Account',
    description: 'Change your account information',
    href: '/settings/account',
    icon: Icons.settings
  },
  {
    title: 'Appearance',
    description: 'Change your appearance settings',
    href: '/settings/appearance',
    icon: Icons.paintbrush
  },
  {
    title: 'Language',
    description: 'Change your language',
    href: '/settings/language',
    icon: Icons.languages
  }
]
