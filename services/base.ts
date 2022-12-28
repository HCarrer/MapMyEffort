import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

class BaseService {
  instance: AxiosInstance
  baseUrl: string

  constructor(instance: AxiosInstance, baseUrl: string) {
    this.instance = instance
    this.baseUrl = baseUrl
  }

  handleResponse<T>(res: AxiosResponse<any, any>): { status: number; data: T } {
    return {
      status: res.data.status,
      data: res.data.data,
    }
  }

  handleError(
    error: AxiosError<any, any>
  ): {
    status: number
    data: any
    message: string
  } {
    const err = {
      status: error.response?.status || 400,
      message: error?.response?.data.message,
      data: error?.response?.data,
    }

    return err
  }
}

export default BaseService
