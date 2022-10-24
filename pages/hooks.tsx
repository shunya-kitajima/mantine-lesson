import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { BrandGithub } from 'tabler-icons-react'
import {
  Dialog,
  Group,
  Button,
  TextInput,
  Text,
  Avatar,
  Indicator,
  Paper,
  Loader,
  Code,
  Progress,
  Grid,
  Center,
} from '@mantine/core'
import { useDisclosure, useToggle, useInterval } from '@mantine/hooks'
import { Layout } from '../components/Layout'

const HooksDemo: React.FC = () => {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  })
  const [btnColor, toggleBtnColor] = useToggle('yellow', ['yellow', 'violet'])
  const [seconds, setSeconds] = useState(0)
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000)

  useEffect(() => {
    interval.start()
    return interval.stop
  }, [])

  return (
    <Layout title="Hooks">
      <Group position="center" direction="column">
        <Text>
          This page is active <strong>{seconds}</strong> [s] after mount
        </Text>
        <Button
          compact
          onClick={interval.toggle}
          color={interval.active ? 'red' : 'teal'}
          variant="light"
        >
          {interval.active ? 'Suspend' : 'Activate'}
        </Button>
      </Group>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => handlers.close()}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="md">
          Subscribe to email newsletter
        </Text>
        <Group>
          <TextInput placeholder="xxx@gmail.com" className="flex-1" />
          <Button onClick={() => handlers.close()}>Subscribe</Button>
        </Group>
      </Dialog>
      <Group direction="column" position="center">
        <Button compact onClick={() => handlers.toggle()}>
          Toggle dialog
        </Button>
        <Button color="cyan" compact onClick={() => handlers.open()}>
          Open dialog
        </Button>
        <Button color="orange" compact onClick={() => handlers.close()}>
          Close dialog
        </Button>
        <Button color={btnColor} compact onClick={() => toggleBtnColor()}>
          Toggle color
        </Button>
      </Group>
    </Layout>
  )
}

export default HooksDemo
