import Link from 'next/link'
import { Card } from '@/components'
import { Post } from '@/types'
import { api } from '@/services'

export default async function Feed() {
  const response = await api.get('/posts')
  const posts: Post[] = response.data

  return posts.length ? (
    posts.map((post) => (
      <Card.Container>
        <Card.User id={post.user.id}>{post.user.name}</Card.User>
        <Link href={`/posts/${post.id}`}>
          <Card.Title>{post.title}</Card.Title>
          <Card.Description>{post.description}</Card.Description>
        </Link>
      </Card.Container>
    ))
  ) : (
    <strong className='text-center'>Não há posts publicados no momento.</strong>
  )
}
