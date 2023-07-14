export default async function SidebarPage() {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return <div>Sidebar</div>
}
