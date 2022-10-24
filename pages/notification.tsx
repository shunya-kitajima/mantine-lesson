import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'
import { Group, Avatar, Button } from '@mantine/core'
import {
  showNotification,
  cleanNotificationsQueue,
  cleanNotifications,
  updateNotification,
} from '@mantine/notifications'
import { Check, X } from 'tabler-icons-react'
import { supabase } from '../utils/supabase'
import { delay } from '../utils/delay'
import { Layout } from '../components/Layout'

const NotificationDemo: React.FC = () => {
  return (
    <Layout title="Notification">
      <Group direction="column" position="center">
        <Button
          onClick={() =>
            showNotification({
              title: 'Default notification',
              message: 'Hey there !',
              autoClose: false,
            })
          }
        >
          Show notification 1
        </Button>
        <Button
          onClick={() =>
            showNotification({
              title: 'PR approved',
              message: 'Your PR approved and merged',
              icon: <Check size={18} />,
              color: 'teal',
              autoClose: false,
            })
          }
        >
          Show notification 2
        </Button>
      </Group>
    </Layout>
  )
}

export default NotificationDemo
