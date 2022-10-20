import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import {
  GitBranch,
  GitPullRequest,
  GitCommit,
  MessageDots,
} from 'tabler-icons-react'
import {
  Center,
  Container,
  Grid,
  RingProgress,
  Text,
  Slider,
  Space,
  Timeline,
} from '@mantine/core'
import { supabase } from '../utils/supabase'
import { useQueryPerformances } from '../hooks/useQueryPerformances'
import { Layout } from '../components/Layout'

const PerformanceDemo = () => {
  return <div></div>
}

export default PerformanceDemo
