import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { Group, Button, Center } from '@mantine/core'
import { Layout } from '../components/Layout'

const GroupDemo: React.FC = () => {
  return (
    <Layout title="Group">
      <Group my="md" grow>
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group my="md" direction="column" position="right">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group my="md" align="center">
        <Button color="indigo" className="h-10">
          1
        </Button>
        <Button color="teal" className="h-20">
          2
        </Button>
        <Button color="orange" className="h-32">
          3
        </Button>
      </Group>
      <Center>
        <Link href="/">
          <ArrowUturnLeftIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default GroupDemo
