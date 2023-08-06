import Link from 'next/link'
import { Card } from '@/components'
import { Post, User } from '@/types'
import { api } from '@/services'

type PageProps = {
  params: { id: string }
}

export default async function User({ params: { id } }: PageProps) {
  const response = await api.get(`/users/${id}`)
  const user: User = response.data

  const { data } = await api.get(`/posts/user/${id}`)
  const posts: Post[] = data

  return (
    <>
      <h1 className='text-4xl font-semibold mb-4'>{user.name}</h1>

      {!posts.length ? (
        <h2>Não há posts publicados</h2>
      ) : (
        <>
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
      )}
    </>
  )
}
