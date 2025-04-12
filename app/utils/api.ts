import { getToken } from './auth'

const baseURL = 'https://classapi.sepehracademy.ir/api'

async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token = getToken()
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
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

export const api = {
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