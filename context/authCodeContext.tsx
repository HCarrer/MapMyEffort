import { createContext, ReactNode, useContext, useState } from 'react'

type AuthCodeContextType = {
  authCode: string
  handleAuthCode: (authCode: string) => void
}

const AuthCodeContextDefaultValues: AuthCodeContextType = {
  authCode: '',
  handleAuthCode: () => {
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

  const handleAuthCode = (code: string) => {
    setAuthCode(code)
  }

  const value = {
    authCode,
    handleAuthCode,
  }

  return(
      <AuthCodeContext.Provider value={value}>
        {children}
      </AuthCodeContext.Provider>
  )
}
