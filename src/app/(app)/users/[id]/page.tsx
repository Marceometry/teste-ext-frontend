import Link from 'next/link'
import { Card } from '@/components'

const posts = new Array(10).fill('').map((_, index) => ({
  id: index + 1,
  title: 'Docs',
  description:
    'Find in-depth information about Next.js features and API. Find in-depth information about Next.js features and API.',
}))

export default function User() {
  return (
    <>
      <h1 className='text-4xl font-semibold mb-4'>Marcelino</h1>

      <h2>Posts</h2>
      {posts.map((post) => (
        <Card.Container>
          <Link href={`/posts/${post.id}`}>
            <Card.Title>{post.title}</Card.Title>
            <Card.Description>{post.description}</Card.Description>
          </Link>
        </Card.Container>
      ))}
    </>
  )
}
