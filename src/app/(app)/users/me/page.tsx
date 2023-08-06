'use client'
import { useEffect, useState } from 'react'
import { Button, Card, FloatingLink } from '@/components'
import { api } from '@/services'
import { User } from '@/types'

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

        <p>{data.email}</p>

        <Button className='mt-8 w-44 self-end block' variant='ghost'>
          Editar informações
        </Button>
        <Button className='mt-1 w-44 self-end border-red-800 bg-red-800 hover:border-red-900 hover:bg-red-900'>
          Excluir minha conta
        </Button>
      </Card.Container>

      <FloatingLink href='/posts/new' />
    </>
  )
}
