'use client'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@/components'
import { api } from '@/services'
import { useEffect } from 'react'

export const LoginForm = () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) router.replace('/feed')
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const email = formData.get('email')
    const password = formData.get('password')
    const data = {
      email,
      password,
    }
    console.log(data)

    try {
      const response = await api.post('/auth/login', data)
      localStorage.setItem('token', response.data.access_token)
      router.push('/feed')
    } catch (error) {
      alert('Algo deu errado')
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <Input name='email' placeholder='E-mail' />
      <Input name='password' placeholder='Senha' type='password' />

      <Button>Entrar</Button>
    </form>
  )
}
