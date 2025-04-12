import { cookies } from 'next/headers'

export const getToken = () => {
  return cookies().get('token')?.value
}

export const removeToken = async () => {
  'use server'
  cookies().delete('token')
} 