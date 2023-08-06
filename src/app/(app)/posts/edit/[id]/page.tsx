import { Button, Card, Input } from '@/components'
import { Post } from '@/types'

export default async function EditPost() {
  const post: Post = await fetch('http://localhost:8000/posts/1').then((res) =>
    res.json(),
  )

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
