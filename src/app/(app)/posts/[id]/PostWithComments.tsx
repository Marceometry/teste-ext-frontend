'use client'
import { useState } from 'react'
import { Card, PostUserActions } from '@/components'
import { Comment, Post } from '@/types'

type Props = {
  post: Post
  comments: Comment[]
}

export function PostWithComments({ post, comments }: Props) {
  const [commentList, setCommentList] = useState(comments)

  return (
    <>
      <Card.Container>
        <Card.User id={post.user.id}>{post.user.name}</Card.User>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.description}</Card.Description>
        <PostUserActions
          post={post}
          comments={commentList}
          updateComments={setCommentList}
        />
      </Card.Container>

      {!commentList.length ? (
        <h2>Não há comentários</h2>
      ) : (
        <>
          <h2>Comentários</h2>
          {commentList.map((comment) => (
            <Card.Container key={comment.id} size='sm'>
              <Card.User id={comment.user.id}>{comment.user.name}</Card.User>
              <Card.Description>{comment.description}</Card.Description>
            </Card.Container>
          ))}
        </>
      )}
    </>
  )
}
