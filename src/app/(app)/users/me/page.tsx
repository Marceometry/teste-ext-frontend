import { Card } from '@/components'
import { api } from '@/services'
import { User } from '@/types'

type PageProps = {
  params: { id: string }
}

export default async function User({ params: { id } }: PageProps) {
  const response = await api.get(`/users/${id}`)
  const user: User = response.data

  return (
    <>
      <Card.Container>
        <h1 className='text-4xl font-semibold mb-4'>{user.name}</h1>

        <p>{user.email}</p>
      </Card.Container>
    </>
  )
}
