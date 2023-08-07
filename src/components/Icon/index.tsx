'use client'
import {
  IconProps,
  Chat,
  Plus,
  PencilSimple,
  ThumbsDown,
  ThumbsUp,
  Trash,
} from 'phosphor-react'

const icons = {
  chat: Chat,
  edit: PencilSimple,
  plus: Plus,
  thumbsDown: ThumbsDown,
  thumbsUp: ThumbsUp,
  trash: Trash,
}

export type IconName = keyof typeof icons

type Props = IconProps & { name: IconName }

export function Icon({ name, ...props }: Props) {
  const Component = icons[name]
  return <Component {...props} />
}
