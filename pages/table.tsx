import React from 'react'
import Link from 'next/link'
import { Table, Container, Loader, Center } from '@mantine/core'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { useQueryTodos } from '../hooks/useQueryTodos'
import { Layout } from '../components/Layout'

const TableDemo: React.FC = () => {
  const { data } = useQueryTodos()

  return (
    <Layout title="Table">
      <Center>
        <Link href="/">
          <ArrowUturnLeftIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default TableDemo
