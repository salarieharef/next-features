'use client'

import React from 'react'
import { useApi } from '../utils/api'
import { useSession } from 'next-auth/react'

const UserInfo = () => {
  const { data: session, status } = useSession()
  const api = useApi()
  const [user, setUser] = React.useState<any>(null)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await api.get('/SharePanel/GetProfileInfo')
        setUser(data)
      } catch (err) {
        setError('خطا در دریافت اطلاعات کاربر')
      }
    }

    if (status === 'authenticated') {
      fetchUser()
    }
  }, [api, status])

  if (status === 'loading') {
    return <div>در حال بارگذاری...</div>
  }

  if (status === 'unauthenticated') {
    return <div>لطفاً ابتدا وارد شوید</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      {user ? (
        <div>
          <p>ایمیل: {user.email}</p>
          {/* سایر اطلاعات کاربر */}
        </div>
      ) : (
        <div>در حال بارگذاری اطلاعات...</div>
      )}
    </div>
  )
}

export default UserInfo