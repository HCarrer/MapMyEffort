import { createContext, ReactNode, useCallback, useContext, useState } from 'react'
import { getAccessToken } from '../instances/auth'
import { IAuthentication } from '../interfaces/authentication'

type AuthenticationContextType = {
  accessToken: string
  handleAuthentication: (code: string) => void
  authentication: IAuthentication | undefined
}

const AuthenticationContextDefaultValues: AuthenticationContextType = {
  accessToken: '',
  handleAuthentication: () => {
    return
  },
  authentication: undefined,
}

const AuthenticationContext = createContext<AuthenticationContextType>(
  AuthenticationContextDefaultValues
)

export function useAuthentication(): AuthenticationContextType {
  return useContext(AuthenticationContext)
}

type Props = {
  children: ReactNode
}

export function AuthenticationProvider({ children }: Props): JSX.Element {
  const [accessToken, setAccessToken] = useState<string>('')
  const [authentication, setAuthentication] = useState<IAuthentication>()

  const authenticate = useCallback(async (code: string) => {
    try {
      const { data }  = await getAccessToken(code)
      setAuthentication(data.data)
      setAccessToken(data.data.access_token)
    } catch {
      setAuthentication(undefined)
      setAccessToken('')
      console.error('Erro ao buscar atividades do usuário.')
    }
  }, [])


  const handleAuthentication = (code: string) => {
    authenticate(code)
  }

  const value = {
    accessToken,
    handleAuthentication,
    authentication,
  }

  return(
      <AuthenticationContext.Provider value={value}>
        {children}
      </AuthenticationContext.Provider>
  )
}
