import { removeToken } from '../utils/auth'
import { redirect } from 'next/navigation'

const LogoutPage = async () => {
  await removeToken()
  redirect('/login')
}

export default LogoutPage 