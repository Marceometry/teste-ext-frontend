import { Button, Card, Input } from '@/components'

export default async function NewPost() {
  return (
    <>
      <Card.Container>
        <h1 className='text-2xl mb-4'>Novo Post</h1>
        <form action='' className='flex flex-col gap-3'>
          <Input placeholder='Título' />
          <Input placeholder='Descrição' className='w-full' />

          <div className='flex gap-2 self-end'>
            <Button variant='ghost'>Cancelar</Button>
            <Button>Publicar</Button>
          </div>
        </form>
      </Card.Container>
    </>
  )
}
