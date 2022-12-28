import axios, { AxiosInstance } from 'axios'
// import { useCode } from '../context/authCodeContext'

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
const STRAVA_API_V3_BASE_URL = 'https://www.strava.com/api/v3'

const StravaApiInstance = () => {
  return (
    axios.create({
      baseURL: STRAVA_API_V3_BASE_URL,
      timeout: 15000,
    })
  )
}

const apiInstance = StravaApiInstance()

apiInstance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

apiInstance.interceptors.response.use(function (response) {
  return { data: response }
})

const listActivities = (code: string) => {
  const headers = {
    headers: {
      'Authorization': `Bearer ${code}`
    }
  }
  console.log(headers)
  const response = apiInstance.get('/athlete/activities?per_page=100', headers)
  return response
}

export { STRAVA_API_V3_BASE_URL, apiInstance, listActivities }
