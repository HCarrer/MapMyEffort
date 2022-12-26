import axios, { AxiosInstance } from 'axios'
// import { useCode } from '../context/authCodeContext'

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
const OAUTH_TOKEN_BASE_URL = 'https://www.strava.com/oauth/token'

const AuthInstance = () => {
  return (
    axios.create({
      baseURL: OAUTH_TOKEN_BASE_URL,
      timeout: 15000,
    })
  )
}

const authInstance = AuthInstance()

authInstance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

authInstance.interceptors.response.use(function (response) {
  return { data: response }
})

const getAuthToken = (code: string) => {
  const data = {
    'client_id': CLIENT_ID || '',
    'client_secret': CLIENT_SECRET || '',
    'code': code,
    'grant_type': 'authorization_code',
  }
  const response = authInstance.post('', data)
  return response
}

export { OAUTH_TOKEN_BASE_URL, authInstance, getAuthToken }
