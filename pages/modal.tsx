import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { Modal, Button, Group } from '@mantine/core'
import { AuthenForm } from '../components/AuthenForm'
import { Layout } from '../components/Layout'

const Modaldemo = () => {
  const [opened, setOpened] = useState(false)

  return (
    <Layout title="Modal">
      <Modal
        title="Authorization Form"
        centered
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <AuthenForm />
      </Modal>
      <Group direction="column" position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
        <Link href="/">
          <ArrowUturnLeftIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  )
}

export default Modaldemo
