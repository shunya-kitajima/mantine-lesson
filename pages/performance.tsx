import React, { useState, useEffect } from 'react'
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

const PerformanceDemo: React.FC = () => {
  const [efficiency, setEfficiency] = useState<number | undefined>(0)
  const [comport, setComfort] = useState<number | undefined>(0)
  const [luck, setLuck] = useState<number | undefined>(0)
  const [durability, setDurability] = useState<number | undefined>(0)
  const [level, setLevel] = useState<number | undefined>(0)
  const { data } = useQueryPerformances()

  useEffect(() => {
    setEfficiency(data?.efficiency)
    setComfort(data?.comfort)
    setLuck(data?.luck)
    setDurability(data?.durability)
    setLevel(data?.level)
  }, [data])

  return <Layout title="Performance"></Layout>
}

export default PerformanceDemo
