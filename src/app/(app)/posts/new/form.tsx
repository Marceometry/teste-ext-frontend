'use client'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@/components'
import { api } from '@/services'

export const NewPostForm = () => {
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const title = formData.get('title')
    const description = formData.get('description')
    const data = {
      title,
      description,
    }

    try {
      const token = localStorage.getItem('token')
      const response = await api.post('/posts', data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      router.push(`/posts/${response.data.id}`)
    } catch (error) {
      alert('Algo deu errado')
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <Input name='title' placeholder='Título' />
      <Input name='description' placeholder='Descrição' className='w-full' />

      <div className='flex gap-2 self-end'>
        <Button variant='ghost' href='/feed'>
          Cancelar
        </Button>
        <Button>Publicar</Button>
      </div>
    </form>
  )
}
