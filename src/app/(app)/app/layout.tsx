import { AuthProvider } from '@/context/AuthContext'
import React from 'react'

const WelcomeLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <AuthProvider>
      <div>
        {children}
      </div>
    </AuthProvider>
  )
}

export default WelcomeLayout
