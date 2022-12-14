import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { ArrowUturnLeftIcon, BoltIcon } from '@heroicons/react/20/solid'
import { Text, Group, Loader } from '@mantine/core'
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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const dateParam = date
      ? `date=${getDate(date!)}-${getMonth(date!) + 1}-${getYear(date!)}`
      : ''

    const getCrypto = async () => {
      if (dateParam) {
        setIsLoading(true)
        await axios
          .get(
            `https://api.coingecko.com/api/v3/coins/bitcoin/history?${dateParam}`
          )
          .then((res) => {
            setBtc(res.data)
          })
        await axios
          .get(
            `https://api.coingecko.com/api/v3/coins/ethereum/history?${dateParam}`
          )
          .then((res) => {
            setEth(res.data)
          })
        setIsLoading(false)
      } else {
        setBtc(null)
        setEth(null)
      }
    }
    getCrypto()
  }, [date])

  return (
    <Layout title="Crypto">
      <Group direction="column" position="center">
        <BoltIcon className="mb-4 h-10 w-10 text-blue-500" />
        {isLoading && <Loader className="mb-4 h-10 w-10 text-blue-500" />}
        <Text mt="md">
          <Text color="blue" component="span">
            Bitcoin
          </Text>{' '}
          {Math.round(Number(btc?.market_data?.current_price.jpy) * 100) / 100}
        </Text>
        <Text>
          <Text color="cyan" component="span">
            Ethereum
          </Text>{' '}
          {Math.round(Number(eth?.market_data?.current_price.jpy) * 100) / 100}
        </Text>
        <DatePicker my="md" value={date} onChange={setDate} />
        <Link href="/">
          <ArrowUturnLeftIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  )
}

export default CryptoDeom
