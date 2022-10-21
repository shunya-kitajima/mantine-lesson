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

  useEffect(() => {
    const dateParam = date
      ? `date=${getDate(date!)}-${getMonth(date!) + 1}-${getYear(date!)}`
      : ''

    if (dateParam) {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/history?${dateParam}`
        )
        .then((res) => {
          setBtc(res.data)
        })
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/ethereum/history?${dateParam}`
        )
        .then((res) => {
          setEth(res.data)
        })
    } else {
      setBtc(null)
      setEth(null)
    }
  }, [date])

  return <Layout title="Crypto"></Layout>
}

export default CryptoDeom
