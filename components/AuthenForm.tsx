import React, { useState } from 'react'
import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Paper,
  LoadingOverlay,
  Anchor,
} from '@mantine/core'
import { AuthForm } from '../types'

const schema = Yup.object().shape({
  firstName: Yup.string().required('No first name provided'),
  lastName: Yup.string().required('No last name provided'),
  email: Yup.string().email('Invalid email').required('No email provided'),
  password: Yup.string()
    .min(8, 'Password should be min 8 chars')
    .required('No password provided'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password does not match')
    .required(),
  termsOfService: Yup.boolean().required(),
})

export const AuthenForm: React.FC = () => {
  const [Loading, setLoading] = useState(false)
  const [isRegister, setIsRegister] = useState(true)
  const form = useForm<AuthForm>({
    schema: yupResolver(schema),
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: true,
    },
  })

  const toggleAuthMode = () => {
    setIsRegister(!isRegister)
  }

  const handleSubmit = (values: AuthForm) => {
    console.log(values)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      form.reset()
    }, 3000)
  }

  return <div>AuthenForm</div>
}
