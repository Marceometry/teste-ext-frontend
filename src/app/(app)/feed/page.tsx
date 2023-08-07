import Link from 'next/link'
import { Card, FloatingLink, PostUserActions } from '@/components'
import { api } from '@/services'
import { Post } from '@/types'

export default async function Feed() {
  const response = await api.get('/posts')
  const posts: Post[] = response.data

  return (
    <>
      {posts.length ? (
        posts.map((post) => (
          <Card.Container key={post.id}>
            <Card.User id={post.user.id}>{post.user.name}</Card.User>
            <Link href={`/posts/${post.id}`}>
              <Card.Title>{post.title}</Card.Title>
              <Card.Description>{post.description}</Card.Description>
            </Link>
            <PostUserActions post={post} comments={post.comments} />
          </Card.Container>
        ))
      ) : (
        <strong className='text-center'>
          Não há posts publicados no momento.
        </strong>
      )}

      <FloatingLink href='/posts/new' />
    </>
  )
}
