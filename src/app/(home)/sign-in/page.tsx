import Link from 'next/link'
import { Button, Input } from '@/components'

export default function Login() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-2xl font-semibold'>Cadastre-se</h1>

      <form action='' className='flex flex-col gap-3'>
        <Input placeholder='Nome' />
        <Input placeholder='E-mail' />
        <Input placeholder='Senha' type='password' />
        <Input placeholder='Repita a senha' type='password' />

        <Button type='submit'>Cadastrar</Button>
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
