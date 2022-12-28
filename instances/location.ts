import axios, { AxiosInstance } from 'axios'
// import { useCode } from '../context/authCodeContext'

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/reverse'

const ReverseGeoLocationInstance = () => {
  return (
    axios.create({
      baseURL: NOMINATIM_BASE_URL,
      timeout: 15000,
    })
  )
}

const reverseGeoLocationInstance = ReverseGeoLocationInstance()

reverseGeoLocationInstance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

reverseGeoLocationInstance.interceptors.response.use(function (response) {
  return { data: response }
})

const getLocation = (lat: string, long: string) => {
  const response = reverseGeoLocationInstance.get(`?lat=${lat}&lon=${long}&format=json`)
  return response
}

export { reverseGeoLocationInstance, getLocation }
