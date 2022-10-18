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
      <Center>
        <Link href="/">
          <ArrowUturnLeftIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default DialogDemo
