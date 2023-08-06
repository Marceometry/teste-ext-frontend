import Link from 'next/link'
import { Card } from '@/components'

const posts = new Array(10).fill('').map((_, index) => ({
  id: index + 1,
  title: 'Docs',
  description:
    'Find in-depth information about Next.js features and API. Find in-depth information about Next.js features and API.',
}))

export default function Feed() {
  return (
    <>
      {posts.map((post) => (
        <Card.Container>
          <Card.User id={1}>Marcelino</Card.User>
          <Link href={`/posts/${post.id}`}>
            <Card.Title>{post.title}</Card.Title>
            <Card.Description>{post.description}</Card.Description>
          </Link>
        </Card.Container>
      ))}
    </>
  )
}
