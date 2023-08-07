'use client'
import { useState } from 'react'
import {
  Card,
  CommentCard,
  PostOwnerActions,
  PostUserActions,
} from '@/components'
import { Comment, Post } from '@/types'
import { useRouter } from 'next/navigation'

type Props = {
  post: Post
  comments: Comment[]
}

export function PostWithComments({ post, comments }: Props) {
  const [commentList, setCommentList] = useState(comments)
  const router = useRouter()

  function removeComment(id: number) {
    setCommentList((state) => state.filter((post) => post.id !== id))
  }

  return (
    <>
      <Card.Container>
        <div className='flex justify-between'>
          <Card.User id={post.user.id}>{post.user.name}</Card.User>
          <PostOwnerActions
            post={post}
            removePost={() => router.push('/feed')}
          />
        </div>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.description}</Card.Description>
        <div className='mt-2'>
          <Card.Image src={post.imageUrl} />
        </div>
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
            <CommentCard
              key={comment.id}
              post={post}
              comment={comment}
              removeComment={removeComment}
            />
          ))}
        </>
      )}
    </>
  )
}
