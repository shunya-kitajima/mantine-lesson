import React, { ChangeEvent, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon, CameraIcon } from '@heroicons/react/20/solid'
import { Avatar, Button, Group, Indicator, Loader } from '@mantine/core'
import { supabase } from '../utils/supabase'
import { Layout } from '../components/Layout'

const AvatarDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState('')

  const uploadAvatarImg = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0)
      throw new Error('Please select the image file')

    const file = e.target.files[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`

    setIsLoading(true)
    const { error } = await supabase.storage
      .from('avatars')
      .upload(fileName, file)
    if (error) throw new Error(error.message)
    setAvatarUrl(fileName)
    setIsLoading(false)
  }
  const upsertProfile = async () => {
    setIsLoading(true)
    const { error } = await supabase.from('profiles').upsert(
      {
        id: supabase.auth.user()?.id,
        avatar_url: avatarUrl,
      },
      {
        returning: 'minimal',
      }
    )
    if (error) throw new Error(error.message)
    setIsLoading(false)
  }

  useEffect(() => {
    const getProfile = async () => {
      const { data, error, status } = await supabase
        .from('profiles')
        .select('avatar_url')
        .eq('id', supabase.auth.user()?.id)
        .single()
      if (error && status !== 406) throw new Error(error.message)
      if (data) setAvatarUrl(data.avatar_url)
    }
    getProfile()
  }, [])

  return (
    <Layout title="Profile">
      <Group></Group>
    </Layout>
  )
}

export default AvatarDemo
