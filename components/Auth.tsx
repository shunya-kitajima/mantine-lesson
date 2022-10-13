import React, { useState } from 'react'
import * as Yup from 'yup'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { useForm, yupResolver } from '@mantine/form'
import {
  Anchor,
  NumberInput,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import { supabase } from '../utils/supabase'
import { Layout } from './Layout'
import { Form } from '../types'

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('No email provided'),
  passward: Yup.string()
    .required('No password provided')
    .min(8, 'Password should be min 8 chars')
    .matches(/[a-z]+/, 'One lowercase char missing')
    .matches(/[A-Z]+/, 'One uppercase char missing')
    .matches(/[@$!%*#?&]/, 'One special char missing'),
  age: Yup.number().min(15, 'Only over 15 for new account'),
})

export const Auth = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const form = useForm<Form>({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
      age: 15,
    },
  })

  const handleSubmit = async () => {
    if (isRegister) {
      const { error } = await supabase.auth.signUp({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      }
      form.reset()
    } else {
      const { error } = await supabase.auth.signIn({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      }
      form.reset()
    }
  }

  return <div></div>
}
