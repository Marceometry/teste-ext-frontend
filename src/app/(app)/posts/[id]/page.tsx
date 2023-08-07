import { api } from '@/services'
import { Comment, Post } from '@/types'
import { PostWithComments } from './PostWithComments'

type PageProps = {
  params: { id: string }
}

export default async function Post({ params: { id } }: PageProps) {
  const response = await api.get(`/posts/${id}`)
  const post: Post = response.data

  const { data } = await api.get(`/comments/post/${id}`)
  const comments: Comment[] = data

  return <PostWithComments post={post} comments={comments} />
}
