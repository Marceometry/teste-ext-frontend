export interface User {
  id: number
  name: string
  email: string
}

export interface Post {
  id: number
  title: string
  description: string
  user: User
}

export interface Comment {
  id: number
  description: string
  user: User
}
