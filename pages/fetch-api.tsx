import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { Center, Grid } from '@mantine/core'
import { FetchTodos } from '../components/FetchTodos'
import { Layout } from '../components/Layout'

const FetchData: React.FC = () => {
  return (
    <Layout title="FetchData">
      <Center>
        <FetchTodos />
      </Center>
      <Center>
        <Link href="/">
          <ArrowUturnLeftIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default FetchData
