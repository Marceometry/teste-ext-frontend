import Link from 'next/link'
import { Card } from '@/components'

const post = {
  id: 1,
  title: 'Docs',
  description:
    'Find in-depth information about Next.js features and API. Find in-depth information about Next.js features and API.',
}

const comments = new Array(10).fill('').map((_, index) => ({
  id: index + 1,
  description:
    'Find in-depth information about Next.js features and API. Find in-depth information about Next.js features and API.',
}))

export default function Post() {
  return (
    <>
      <Card.Container>
        <Card.User id={1}>Marcelino</Card.User>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.description}</Card.Description>
      </Card.Container>

      <h2>Comments</h2>
      {comments.map((comment) => (
        <Card.Container size='sm'>
          <Card.User id={1}>Marcelino</Card.User>
          <Card.Description>{comment.description}</Card.Description>
        </Card.Container>
      ))}
    </>
  )
}
