type Props = {
  children: string
}

export const CardDescription = ({ children }: Props) => {
  return <p className='m-0 text-sm text-neutral-300'>{children}</p>
}
