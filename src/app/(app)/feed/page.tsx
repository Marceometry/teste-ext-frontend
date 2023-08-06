import Link from 'next/link'
import { Card } from '@/components'
import { Post } from '@/types'

export default async function Feed() {
  const posts: Post[] = await fetch('http://localhost:8000/posts').then((res) =>
    res.json(),
  )

  return (
    <>
      {posts.map((post) => (
        <Card.Container>
          <Card.User id={post.user.id}>{post.user.name}</Card.User>
          <Link href={`/posts/${post.id}`}>
            <Card.Title>{post.title}</Card.Title>
            <Card.Description>{post.description}</Card.Description>
          </Link>
        </Card.Container>
      ))}
    </>
  )
}
