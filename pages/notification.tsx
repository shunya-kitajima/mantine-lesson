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
  return <div></div>
}

export default NotificationDemo
