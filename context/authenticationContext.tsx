import { createContext, ReactNode, useCallback, useContext, useState } from 'react'
import { getAccessToken } from '../instances/auth'
import { IAuthentication } from '../interfaces/authentication'

type AuthenticationContextType = {
  userIsLogged: boolean
  login: () => void
  logout: () => void
  accessToken: string
  handleAuthentication: (code: string) => void
  authentication: IAuthentication | undefined
}

const AuthenticationContextDefaultValues: AuthenticationContextType = {
  userIsLogged: false,
  login: () => {
    return
  },
  logout: () => {
    return
  },
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
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false)
  const [accessToken, setAccessToken] = useState<string>('')
  const [authentication, setAuthentication] = useState<IAuthentication>()

  const authenticate = useCallback(async (code: string) => {
    try {
      const { data }  = await getAccessToken(code)
      setAuthentication(data.data)
      setAccessToken(data.data.access_token)
      login()
    } catch {
      setAuthentication(undefined)
      setAccessToken('')
      console.error('Erro ao buscar atividades do usuário.')
    }
  }, [])

  const login = () => {
    setUserIsLogged(true)
  }

  const logout = () => {
    setUserIsLogged(false)
  }

  const handleAuthentication = (code: string) => {
    authenticate(code)
  }

  const value = {
    userIsLogged,
    login,
    logout,
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
