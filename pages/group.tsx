import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { Group, Button, Center } from '@mantine/core'
import { Layout } from '../components/Layout'

const GroupDemo: React.FC = () => {
  return (
    <Layout title="Group">
      <Group my="md">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
    </Layout>
  )
}

export default GroupDemo
