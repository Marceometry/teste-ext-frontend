'use client'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@/components'
import { api } from '@/services'

export const SignInForm = () => {
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const password = formData.get('password')
    const passwordConfirm = formData.get('password_confirm')
    if (password !== passwordConfirm) return alert('As senhas não são iguais')

    const name = formData.get('name')
    const email = formData.get('email')
    const data = {
      name,
      email,
      password,
    }

    try {
      await api.post('/users', data)
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
      <Input name='name' placeholder='Nome' />
      <Input name='email' placeholder='E-mail' />
      <Input name='password' placeholder='Senha' type='password' />
      <Input
        name='password_confirm'
        placeholder='Confirme a senha'
        type='password'
      />

      <Button>Cadastrar</Button>
    </form>
  )
}
