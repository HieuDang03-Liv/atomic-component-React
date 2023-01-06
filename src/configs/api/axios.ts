import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios'
import { API_URL, TOKEN_EXPIRED_MSG } from '@common/constants'
import { getJwtToken, setJwtToken } from '@common/utility/authToken'

const baseURL = API_URL

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL,
  responseType: 'json'
}

function initialization(): AxiosInstance {
  const axiosInstance: AxiosInstance = axios.create(axiosRequestConfig)

  axiosInstance.interceptors.request.use((config) => {
    const existedToken = getJwtToken()
    if (existedToken) {
      config.headers = {
        Authorization: `Bearer ${existedToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return config
  })

  axiosInstance.interceptors.response.use(
    (res) => res,
    (err: AxiosError) => {
      const data: any = err.response?.data
      if (data?.message === TOKEN_EXPIRED_MSG) {
        return refreshAccessToken(axiosInstance, err)
      }
      return Promise.reject(err)
    }
  )

  return axiosInstance
}

function refreshAccessToken(instance: AxiosInstance, error: AxiosError): void {
  instance.post('auth/refresh_token').then((res) => {
    setJwtToken(res.data)
    axios.defaults.headers.common['Authorization'] = `Bearer ${getJwtToken()}`
    return instance(error.config as any)
  })
}

export default initialization
