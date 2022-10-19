import React, { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { useQueryClient } from 'react-query'
import * as Yup from 'yup'
import { ArrowUturnLeftIcon, CameraIcon } from '@heroicons/react/20/solid'
import { useForm, yupResolver } from '@mantine/form'
import {
  Grid,
  Container,
  Center,
  Button,
  TextInput,
  Loader,
  Textarea,
  Select,
} from '@mantine/core'
import { Layout } from '../components/Layout'
import { CustomCard } from '../components/CustomCard'
import { useQueryPosts } from '../hooks/useQueryPosts'
import { supabase } from '../utils/supabase'
import { Post } from '../types'

const PostList: React.FC = () => {
  return <div></div>
}

export default PostList
