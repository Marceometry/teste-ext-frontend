export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) => {
  return (
    <input
      {...props}
      className={`w-72 rounded-md py-2 px-4 border border-slate-700 bg-slate-950 ${props.className}`}
    />
  )
}
