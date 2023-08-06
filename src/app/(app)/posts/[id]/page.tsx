import { Card } from '@/components'
import { Comment, Post } from '@/types'

export default async function Post() {
  const post: Post = await fetch('http://localhost:8000/posts/1').then((res) =>
    res.json(),
  )

  const comments: Comment[] = await fetch(
    'http://localhost:8000/comments/post/1',
  ).then((res) => res.json())

  return (
    <>
      <Card.Container>
        <Card.User id={post.user.id}>{post.user.name}</Card.User>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.description}</Card.Description>
      </Card.Container>

      <h2>Comments</h2>
      {comments.map((comment) => (
        <Card.Container size='sm'>
          <Card.User id={comment.user.id}>{comment.user.name}</Card.User>
          <Card.Description>{comment.description}</Card.Description>
        </Card.Container>
      ))}
    </>
  )
}
