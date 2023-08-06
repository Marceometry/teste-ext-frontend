'use client'

import Link from 'next/link'
import { Button, Input } from '@/components'

export default function Login() {
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

    const response = await fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.parse(JSON.stringify(data)),
      mode: 'no-cors',
    }).then((res) => res.json())
    console.log(response)
  }

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-2xl font-semibold'>Cadastre-se</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <Input id='name' name='name' placeholder='Nome' />
        <Input id='email' name='email' placeholder='E-mail' />
        <Input
          id='password'
          name='password'
          placeholder='Senha'
          type='password'
        />
        <Input
          id='password_confirm'
          name='password_confirm'
          placeholder='Confirme a senha'
          type='password'
        />

        <Button>Cadastrar</Button>
      </form>

      <p className='text-xs w-64'>
        Já possui uma conta?{' '}
        <Link href='login' className='text-sky-500'>
          Entre aqui
        </Link>
        .
      </p>
    </div>
  )
}
