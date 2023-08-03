export default function Page() {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i}>hello</div>
      ))}
    </div>
  )
}
