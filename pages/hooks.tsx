import React, { useState } from 'react'
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
import { useDisclosure, useToggle } from '@mantine/hooks'
import { Layout } from '../components/Layout'

const HooksDemo: React.FC = () => {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  })
  const [btnColor, toggleBtnColor] = useToggle('yellow', ['yellow', 'violet'])

  return (
    <Layout title="Hooks">
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
      </Group>
    </Layout>
  )
}

export default HooksDemo
