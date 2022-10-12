import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { Grid, Center } from '@mantine/core'
import { Layout } from '../components/Layout'

const GridDemo: React.FC = () => {
  return (
    <Layout title="Grid">
      <Grid my="md">
        <Grid.Col
          className="bg-blue-500 text-center font-bold text-gray-100"
          span={4}
        >
          1
        </Grid.Col>
      </Grid>
      <Center>
        <Link href="/">
          <ArrowUturnLeftIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default GridDemo
