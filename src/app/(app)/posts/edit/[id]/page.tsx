import { Card } from '@/components'
import { api } from '@/services'
import { Post } from '@/types'
import { EditPostForm } from './form'

type PageProps = {
  params: { id: string }
}

export default async function EditPost({ params: { id } }: PageProps) {
  const response = await api.get(`/posts/${id}`)
  const post: Post = response.data

  return (
    <>
      <Card.Container>
        <h1 className='text-2xl mb-4'>Editar Post</h1>
        <EditPostForm post={post} />
      </Card.Container>
    </>
  )
}
