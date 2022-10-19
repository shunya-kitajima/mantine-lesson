import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

type Props = {
  title: string
  content: string
  status: string
  postUrl: string
}

export const CustomCard: React.FC<Props> = ({
  title,
  content,
  status,
  postUrl,
}) => {
  return (
    <Card shadow="md">
      <Card.Section>
        <Image
          src={postUrl}
          height={160}
          alt="With default placeholder"
          withPlaceholder
        />
      </Card.Section>
    </Card>
  )
}
