import React from 'react'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { ActionIcon, Center, Menu } from '@mantine/core'
import { NextLink } from '@mantine/next'
import { Settings } from 'tabler-icons-react'
import { supabase } from '../utils/supabase'
import { Layout } from './Layout'

export const DashBoard: React.FC = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }

  return (
    <Layout title="DashBoard">
      <Center>
        <ShieldCheckIcon className="mb-4 h-14 w-14 text-teal-500" />
      </Center>
      <Menu trigger="hover" size="xl">
        <Menu.Label> UI Component</Menu.Label>
        <Menu.Item
          icon={<Settings size={16} />}
          component={NextLink}
          href="/button"
        >
          Button
        </Menu.Item>
      </Menu>
      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <ArrowRightOnRectangleIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}
