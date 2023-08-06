const posts = new Array(10).fill('').map((_, index) => ({
  id: index + 1,
  title: 'Docs',
  description:
    'Find in-depth information about Next.js features and API. Find in-depth information about Next.js features and API.',
}))

export default function Feed() {
  return (
    <div className='grid gap-2 p-14 pt-0 mx-auto text-left w-fit'>
      {posts.map((post) => (
        <div className='h-fit group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30'>
          <a href='' className='mb-1 text-sm hover:underline text-neutral-100'>
            Marcelino
          </a>
          <a href=''>
            <h2 className='mb-2 text-2xl font-semibold'>{post.title}</h2>
            <p className='m-0 max-w-[50ch] text-sm text-neutral-300'>
              {post.description}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}
