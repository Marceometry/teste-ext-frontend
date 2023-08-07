import Link from 'next/link'
import { Icon } from '@/components'

type Props = {
  href: string
}

export const FloatingLink = ({ href }: Props) => {
  return (
    <Link
      href={href}
      className='fixed bottom-10 right-10 lg:bottom-14 lg:right-32 p-3 text-3xl rounded-full text-white bg-sky-600 dark:bg-sky-900 shadow-sm hover:scale-105 transition-transform'
    >
      <Icon name='plus' />
    </Link>
  )
}
