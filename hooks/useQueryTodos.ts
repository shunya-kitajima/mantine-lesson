import { useQuery } from 'react-query'
import { supabase } from '../utils/supabase'
import { delay } from '../utils/delay'
import { Todo } from '../types'

export const useQueryTodos = () => {
  const getTodos = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('id', { ascending: true })
    await delay(2000)
    if (error) throw new Error(error.message)
    return data
  }

  return useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}
