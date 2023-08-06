import Link from 'next/link'

type Props = {
  href: string
}

export const FloatingLink = ({ href }: Props) => {
  return (
    <Link
      href={href}
      className='fixed bottom-10 right-10 lg:bottom-14 lg:right-32 p-3 text-[0] rounded-full bg-sky-900 shadow-sm hover:scale-105 transition-transform'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        fill='currentColor'
        viewBox='0 0 256 256'
      >
        <path d='M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z'></path>
      </svg>
    </Link>
  )
}
