'use server'

export async function loadMoreMessages(lastId: number) {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return Array.from({ length: 10 }, (_, i) => ({
    id: i + lastId,
    content: `Message ${i + lastId}`,
    createdAt: new Date(),
    sender: {
      id: (i + lastId) % 2,
      name: (i + lastId) % 2 ? 'John Doe' : 'Jane Doe'
    }
  }))
}
