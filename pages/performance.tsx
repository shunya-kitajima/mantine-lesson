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

  const updateHandler = async (value: number, key: string) => {
    await supabase
      .from('performances')
      .update({ [key]: value })
      .eq('user_id', supabase.auth.user()?.id)
  }

  return (
    <Layout title="Performance">
      <Container>
        {data && (
          <Timeline active={data.level - 1} bulletSize={24} lineWidth={2}>
            <Timeline.Item bullet={<GitBranch size={12} />} title="Level 1">
              <Text color="dimmed" size="sm">
                <Text
                  variant="link"
                  size="sm"
                  component="a"
                  target="_blank"
                  href="https://reactjs.org/docs/hooks-intro.html"
                >
                  React Hokks
                </Text>{' '}
                understand the basic usage of React Hokks
              </Text>
            </Timeline.Item>
            <Timeline.Item bullet={<GitCommit size={12} />} title="Level 2">
              <Text color="dimmed" size="sm">
                <Text
                  variant="link"
                  size="sm"
                  component="a"
                  target="_blank"
                  href="https://redux-toolkit.js.org"
                >
                  Redux Toolkit
                </Text>{' '}
                understand the client state management with RTK
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<GitPullRequest size={12} />}
              title="Level 3"
              lineVariant="dashed"
            >
              <Text color="dimmed" size="sm">
                <Text
                  variant="link"
                  size="sm"
                  component="a"
                  target="_blank"
                  href="https://react-query.tanstack.com/"
                >
                  React-Query
                </Text>{' '}
                understand the server data management with react-query
              </Text>
            </Timeline.Item>
            <Timeline.Item bullet={<GitBranch size={12} />} title="Level 4">
              <Text color="dimmed" size="sm">
                <Text
                  variant="link"
                  size="sm"
                  component="a"
                  target="_blank"
                  href="https://testing-library.com/docs/react-testing-library/intro/"
                >
                  Integration + E2E test
                </Text>{' '}
                able to write the test code
              </Text>
            </Timeline.Item>
          </Timeline>
        )}
      </Container>
      <Space h="xl" />
      {data && (
        <Grid>
          <Grid.Col md={6} lg={3}>
            <Center>
              <Text color="gray">Efficiency</Text>
            </Center>
            <Center>
              <RingProgress
                size={140}
                thickness={14}
                sections={[{ value: data.efficiency, color: 'indigo' }]}
                label={
                  <Text color="blue" weight="bold" align="center" size="xl">
                    {data.efficiency}%
                  </Text>
                }
              />
            </Center>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Center>
              <Text color="gray">Comfort</Text>
            </Center>
            <Center>
              <RingProgress
                size={140}
                thickness={14}
                sections={[{ value: data.comfort, color: 'pink' }]}
                label={
                  <Text color="blue" weight={700} align="center" size="xl">
                    {data.comfort}%
                  </Text>
                }
              />
            </Center>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Center>
              <Text color="gray">Luck</Text>
            </Center>
            <Center>
              <RingProgress
                size={140}
                thickness={14}
                sections={[{ value: data.luck, color: 'orange' }]}
                label={
                  <Text color="blue" weight={700} align="center" size="xl">
                    {data.luck}%
                  </Text>
                }
              />
            </Center>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <Center>
              <Text color="gray">Durability</Text>
            </Center>
            <Center>
              <RingProgress
                size={140}
                thickness={14}
                sections={[{ value: data.durability, color: 'cyan' }]}
                label={
                  <Text color="blue" weight={700} align="center" size="xl">
                    {data.durability}%
                  </Text>
                }
              />
            </Center>
          </Grid.Col>
        </Grid>
      )}
    </Layout>
  )
}

export default PerformanceDemo
