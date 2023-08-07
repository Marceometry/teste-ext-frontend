'use client'
import Link from 'next/link'
import { Card, AddPostButton, PostUserActions } from '@/components'
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
            <Link href={`/posts/${post.id}`} className='grid grid-cols-2 gap-4'>
              <div>
                <Card.Title>{post.title}</Card.Title>
                <Card.Description>{post.description}</Card.Description>
              </div>
              <Card.Image src={post.imageUrl} />
            </Link>
            <PostUserActions post={post} comments={post.comments} />
          </Card.Container>
        ))
      ) : (
        <strong className='text-center'>
          Não há posts publicados no momento.
        </strong>
      )}

      <AddPostButton />
    </>
  )
}
