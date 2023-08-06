import Link from 'next/link'
import { Button, Input } from '@/components'

export default function Login() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-2xl font-semibold'>Entre na sua conta</h1>

      <form action='' className='flex flex-col gap-3'>
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' />

        <Button type='submit'>Entrar</Button>
      </form>

      <p className='text-xs w-64'>
        Ainda não tem uma conta?{' '}
        <Link href='sign-in' className='text-sky-500'>
          Cadastre-se aqui
        </Link>
        .
      </p>
    </div>
  )
}
