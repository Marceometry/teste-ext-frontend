'use client'
import { useEffect, useState } from 'react'
import { Button, Card, FloatingLink } from '@/components'
import { api } from '@/services'
import { User } from '@/types'
import Link from 'next/link'

export default function User() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<User | null>(null)

  async function getProfile() {
    try {
      const user = JSON.parse(localStorage.getItem('user') || '')
      const { data } = await api.get(`/users/${user?.id}`)
      setData(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  if (isLoading) return null
  if (!data) throw new Error('')

  return (
    <>
      <Card.Container>
        <h1 className='text-4xl font-semibold mb-4'>{data.name}</h1>

        <p className='mb-2'>{data.email}</p>

        <Link href={`/users/${data.id}`} className='hover:underline'>
          Meus posts
        </Link>

        <div className='mt-8 flex gap-2'>
          <Button className='self-end !w-44 !border-red-800 !bg-red-800 hover:!bg-red-900'>
            Excluir minha conta
          </Button>
          <Button className='!w-44 self-end block' variant='ghost'>
            Editar informações
          </Button>
        </div>
      </Card.Container>

      <FloatingLink href='/posts/new' />
    </>
  )
}
