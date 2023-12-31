import Image from 'next/image'
import Link from 'next/link'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-screen grid gap-8 grid-cols-2 place-items-center p-14 mx-auto'>
      <div className="z-10 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-[200px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Link href='/'>
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/next.svg'
            alt='Next.js Logo'
            width={270}
            height={55}
            priority
          />
        </Link>
      </div>

      {children}
    </div>
  )
}
