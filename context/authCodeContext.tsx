import { createContext, ReactNode, useContext, useState } from 'react'

type AuthCodeContextType = {
  authCode: string
  handleAuthCode: (authCode: string) => void
  refreshToken: string
  handleRefreshToken: (refreshToken: string) => void
}

const AuthCodeContextDefaultValues: AuthCodeContextType = {
  authCode: '',
  handleAuthCode: () => {
    return
  },
  refreshToken: '',
  handleRefreshToken: () => {
    return
  },
}

const AuthCodeContext = createContext<AuthCodeContextType>(
  AuthCodeContextDefaultValues
)

export function useCode(): AuthCodeContextType {
  return useContext(AuthCodeContext)
}

type Props = {
  children: ReactNode
}

export function AuthCodeProvider({ children }: Props): JSX.Element {
  const [authCode, setAuthCode] = useState<string>('')
  const [refreshToken, setRefreshToken] = useState<string>('')

  const handleAuthCode = (code: string) => {
    setAuthCode(code)
  }

  const handleRefreshToken = (refreshToken: string) => {
    setRefreshToken(refreshToken)
  }

  const value = {
    authCode,
    handleAuthCode,
    refreshToken,
    handleRefreshToken
  }

  return(
      <AuthCodeContext.Provider value={value}>
        {children}
      </AuthCodeContext.Provider>
  )
}
