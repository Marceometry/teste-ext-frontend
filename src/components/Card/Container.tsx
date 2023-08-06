type Props = {
  children: React.ReactNode
  size?: 'sm' | 'md'
}

export const CardContainer = ({ children, size = 'md' }: Props) => {
  return (
    <div
      className={`h-fit group rounded-lg border border-transparent transition-colors ${
        size === 'sm' ? 'p-3' : 'px-5 py-4'
      } border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30`}
    >
      {children}
    </div>
  )
}
