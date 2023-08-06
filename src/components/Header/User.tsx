'use client'
import { api } from '@/services'
import { User } from '@/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function User() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<User | null>(null)

  async function getProfile() {
    try {
      const token = localStorage.getItem('token')
      const { data } = await api.get('/auth/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      localStorage.setItem('user', JSON.stringify(data))
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

  return (
    <div>
      {data ? (
        <Link href='/users/me' className='hover:underline'>
          {data.name}
        </Link>
      ) : (
        <Link href='/login' className='hover:underline'>
          Entrar
        </Link>
      )}
    </div>
  )
}
