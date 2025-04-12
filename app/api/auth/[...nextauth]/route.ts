import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

declare module 'next-auth' {
  interface User {
    token?: string
  }
  interface Session {
    token?: string
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        phoneOrGmail: { label: "ایمیل یا شماره تلفن", type: "text" },
        password: { label: "رمز عبور", type: "password" },
        rememberMe: { label: "مرا به خاطر بسپار", type: "checkbox" }
      },
      async authorize(credentials) {
        try {
          const res = await fetch('https://classapi.sepehracademy.ir/api/Sign/Login', {
            method: 'POST',
            body: JSON.stringify({
              phoneOrGmail: credentials?.phoneOrGmail,
              password: credentials?.password,
              rememberMe: credentials?.rememberMe === 'true'
            }),
            headers: { 'Content-Type': 'application/json' }
          })
          
          const data = await res.json()
          
          if (data.token) {
            return {
              id: data.userId,
              email: data.email,
              name: data.name,
              token: data.token
            }
          }
          
          return null
        } catch (error) {
          console.error('خطا در احراز هویت:', error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token
      }
      return token
    },
    async session({ session, token }) {
      session.token = token.token
      return session
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  }
})

export { handler as GET, handler as POST } 