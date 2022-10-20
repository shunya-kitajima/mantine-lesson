import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { SupabaseRealtimePayload } from '@supabase/supabase-js'
import { supabase } from '../utils/supabase'
import { Performance } from '../types'

export const useQueryPerformances = () => {
  const getPerformances = async () => {
    const { data, error } = await supabase
      .from('performances')
      .select('*')
      .order('created_at', { ascending: true })
  }

  return {}
}
