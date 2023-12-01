import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: "url"
})

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    'Authorization': `Bearer token`,
  }
  return config
})

axiosInstance.interceptors.response.use((response: any) => {
  return response
}, (error: any) => {
  switch (error?.response?.status) {
    case 401:
      break
    case 403:
      break
    case 406:
      break
    case 422:
      break
    default:
      break
  }
  return Promise.reject(error)
})

export default axiosInstance
