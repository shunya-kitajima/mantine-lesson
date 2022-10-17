import React from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { Loader, Text, Alert, Center } from '@mantine/core'
import { useQueryTodos } from '../hooks/useQueryTodos'

export const FetchTodos: React.FC = () => {
  const { data, status } = useQueryTodos()

  if (status === 'loading')
    return (
      <Center>
        <Loader color="indigo" size="xl" />
      </Center>
    )

  if (status === 'error')
    return (
      <Center>
        <Alert
          icon={<ExclamationCircleIcon />}
          title="Fetch Error!"
          color="red"
          radius="md"
        >
          Something wrong happend !
        </Alert>
      </Center>
    )

  return <div>FetchTodos</div>
}
