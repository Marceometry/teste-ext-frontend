import Link from 'next/link'
import { Card } from '@/components'
import { Post, User } from '@/types'

export default async function User() {
  const user: User = await fetch('http://localhost:8000/users/1').then((res) =>
    res.json(),
  )

  const posts: Post[] = await fetch('http://localhost:8000/posts/user/1').then(
    (res) => res.json(),
  )

  return (
    <>
      <h1 className='text-4xl font-semibold mb-4'>{user.name}</h1>

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
