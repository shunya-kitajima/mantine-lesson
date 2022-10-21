import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { ArrowUturnLeftIcon, BoltIcon } from '@heroicons/react/20/solid'
import { Text, Group } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { getDate, getMonth, getYear } from 'date-fns'
import { Layout } from '../components/Layout'

type Coin = {
  market_data: {
    current_price: { jpy: string }
  }
}

const CryptoDeom: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date())
  const [btc, setBtc] = useState<Coin | null>(null)
  const [eth, setEth] = useState<Coin | null>(null)

  return <Layout title="Crypto"></Layout>
}

export default CryptoDeom
