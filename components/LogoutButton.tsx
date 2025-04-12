'use client'

import { useRouter } from 'next/navigation'
import { removeToken } from '../app/actions/auth'

const LogoutButton = () => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await removeToken()
      router.push('/login')
    } catch (error) {
      console.error('خطا در خروج:', error)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
    >
      خروج
    </button>
  )
}

export default LogoutButton 