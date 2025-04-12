'use server'

import { cookies } from 'next/headers'

export const setToken = async (token: string) => {
  cookies().set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  })
}

export const removeToken = async () => {
  cookies().delete('token')
} 