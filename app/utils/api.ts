'use client'

import { useSession } from 'next-auth/react'

declare module 'next-auth' {
  interface Session {
    token?: string
  }
}

const baseURL = 'https://classapi.sepehracademy.ir/api'

export function useApi() {
  const { data: session } = useSession()

  async function fetchWithAuth(url: string, options: RequestInit = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...(session?.token ? { 'Authorization': `Bearer ${session.token}` } : {}),
      ...options.headers,
    }

    const response = await fetch(`${baseURL}${url}`, {
      ...options,
      headers,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  }

  return {
    get: (url: string, options?: RequestInit) => 
      fetchWithAuth(url, { ...options, method: 'GET' }),
    
    post: (url: string, data: any, options?: RequestInit) => 
      fetchWithAuth(url, { 
        ...options, 
        method: 'POST',
        body: JSON.stringify(data)
      }),
    
    put: (url: string, data: any, options?: RequestInit) => 
      fetchWithAuth(url, { 
        ...options, 
        method: 'PUT',
        body: JSON.stringify(data)
      }),
    
    delete: (url: string, options?: RequestInit) => 
      fetchWithAuth(url, { ...options, method: 'DELETE' }),
  }
} 