import { Card } from '@/components'
import { api } from '@/services'
import { Comment, Post } from '@/types'

type PageProps = {
  params: { id: string }
}

export default async function Post({ params: { id } }: PageProps) {
  const response = await api.get(`/posts/${id}`)
  const post: Post = response.data

  const { data } = await api.get(`/comments/post/${id}`)
  const comments: Comment[] = data

  return (
    <>
      <Card.Container>
        <Card.User id={post.user.id}>{post.user.name}</Card.User>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.description}</Card.Description>
      </Card.Container>

      {!comments.length ? (
        <h2>Não há comentários</h2>
      ) : (
        <>
          <h2>Comentários</h2>
          {comments.map((comment) => (
            <Card.Container size='sm'>
              <Card.User id={comment.user.id}>{comment.user.name}</Card.User>
              <Card.Description>{comment.description}</Card.Description>
            </Card.Container>
          ))}
        </>
      )}
    </>
  )
}
