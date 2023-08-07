'use client'
import { Post, User } from '@/types'
import { api } from '@/services'
import { Posts } from './Posts'
import { FloatingLink } from '@/components'

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
        <Posts posts={posts} />
      )}

      <FloatingLink href='/posts/new' />
    </>
  )
}
