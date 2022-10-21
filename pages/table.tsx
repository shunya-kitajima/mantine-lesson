import React from 'react'
import Link from 'next/link'
import { Table, Container, Loader, Center } from '@mantine/core'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { useQueryTodos } from '../hooks/useQueryTodos'
import { Layout } from '../components/Layout'

const TableDemo: React.FC = () => {
  const { data, status } = useQueryTodos()
  const rows = data?.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.created_at}</td>
    </tr>
  ))

  if (status === 'loading')
    return (
      <Layout title="Table">
        <Center>
          <Loader color="blue" size="lg" />
        </Center>
      </Layout>
    )

  return (
    <Layout title="Table">
      <Container>
        <Table
          striped
          highlightOnHover
          horizontalSpacing="lg"
          verticalSpacing="sm"
          captionSide="bottom"
        >
          <caption>Todo items from Supabase</caption>
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Created At</td>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
      <Center>
        <Link href="/">
          <ArrowUturnLeftIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default TableDemo
