import { Button } from '@/components'

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <h1 className='text-2xl font-semibold'>
        Algum texto de exemplo.
        <br />
        Inscreva-se agora mesmo
      </h1>
      <div className='grid gap-2 w-full'>
        <Button href='/login'>Entrar</Button>
        <Button href='/sign-in' variant='ghost'>
          Criar uma conta
        </Button>
      </div>
    </div>
  )
}
