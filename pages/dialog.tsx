import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core'
import { Layout } from '../components/Layout'

const DialogDemo: React.FC = () => {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpened(true)
    }, 1500)
  }, [])

  return (
    <Layout title="Dialog">
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="md">
          Subscribe to email newsletter
        </Text>
        <Group>
          <TextInput placeholder="xxx@gmail.com" className="flex-1" />
          <Button onClick={() => setOpened(false)}>Subscribe</Button>
        </Group>
      </Dialog>
      <Group direction="column" position="center">
        <Button onClick={() => setOpened(!opened)}>Toggle dialog</Button>
        <Link href="/">
          <ArrowUturnLeftIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  )
}

export default DialogDemo
