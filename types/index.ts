export type Form = {
  email: string
  password: string
  age: number
}

export type Todo = {
  id: string
  created_at: string
  title: string
}

export type AuthForm = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  termsOfService: boolean
}

export type Post = {
  id: string
  created_at: string
  title: string
  content: string
  status: string
  post_url: string
}

export type Performance = {
  id: number
  created_at: string
  efficiency: number
  comfort: number
  luck: number
  durability: number
  user_id: string
  level: number
}
