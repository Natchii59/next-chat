import { Thread, User } from '@prisma/client'

export interface SiteConfig {
  name: string
  description: string
  url: string
  links: {
    twitter: string
    github: string
  }
}

export type ThreadWithFields = Thread & {
  author: User
  likes: { userId: string }[]
}
