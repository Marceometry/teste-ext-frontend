import { Button, Card, Input } from '@/components'
import { api } from '@/services'
import { Post } from '@/types'

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
        <form action='' className='flex flex-col gap-3'>
          <Input placeholder='Título' defaultValue={post.title} />
          <Input
            placeholder='Descrição'
            className='w-full'
            defaultValue={post.description}
          />

          <div className='flex gap-2 self-end'>
            <Button variant='ghost'>Cancelar</Button>
            <Button>Publicar</Button>
          </div>
        </form>
      </Card.Container>
    </>
  )
}
