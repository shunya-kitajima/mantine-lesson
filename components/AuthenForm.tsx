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
  return <div>AuthenForm</div>
}
