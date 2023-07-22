import { links } from './datas'
import { NavbarLinkItem } from './navbar-link-item'

interface NavbarFriendsStatus {
  [key: string]: number
}

async function getNavbarFriendsStatus(): Promise<NavbarFriendsStatus> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    request: 2
  }
}

export async function NavbarLinksStatus() {
  const status = await getNavbarFriendsStatus()

  return (
    <>
      {links.map((link, index) => (
        <NavbarLinkItem key={index} link={link} status={status[link.id]} />
      ))}
    </>
  )
}
