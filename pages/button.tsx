import React from 'react'
import { Button, Group } from '@mantine/core'
import { Layout } from '../components/Layout'

const ButtonDemo: React.FC = () => {
  return (
    <Layout title="Button">
      <Group>
        <Button>Press</Button>
      </Group>
    </Layout>
  )
}

export default ButtonDemo
