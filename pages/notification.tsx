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
        <Button
          onClick={() =>
            showNotification({
              title: 'Automatic test failed',
              message: 'Test failed...',
              icon: <X size={18} />,
              color: 'red',
              autoClose: false,
            })
          }
        >
          Show notification 3
        </Button>
        <Button
          onClick={() => {
            showNotification({
              id: 'load-data',
              loading: true,
              title: 'Loading your data',
              message:
                'Data will be loaded in 3 seconds, you cannot close this yet',
              autoClose: false,
              disallowClose: true,
            })

            setTimeout(() => {
              updateNotification({
                id: 'load-data',
                color: 'teal',
                title: 'Data was loaded',
                message:
                  'Notification will close in 2 seconds, you can close this notification now',
                icon: <Check />,
                autoClose: 2000,
              })
            }, 3000)
          }}
        >
          Show notification 4
        </Button>
        <Button
          onClick={async () => {
            showNotification({
              id: 'load-profile',
              loading: true,
              title: 'Loading your profile',
              message: 'Please wait for a while',
              autoClose: false,
              disallowClose: true,
            })

            const { data, error, status } = await supabase
              .from('profiles')
              .select('avatar_url')
              .eq('id', supabase.auth.user()?.id)
              .single()
            await delay(2000)
            if (error && status !== 406) throw new Error(error.message)
            updateNotification({
              id: 'load-profile',
              color: 'teal',
              title: 'Your profile was loaded',
              message:
                'Noticifation will close in 2 seconds, you can close this notification now',
              icon: (
                <Avatar
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/avatars/${data.avatar_url}`}
                />
              ),
              autoClose: 2000,
            })
          }}
        >
          Show notification 5
        </Button>
        <Button color="gray" onClick={cleanNotificationsQueue}>
          Clean queue
        </Button>
        <Button color="orange" onClick={cleanNotifications}>
          Clean all
        </Button>
      </Group>
    </Layout>
  )
}

export default NotificationDemo
