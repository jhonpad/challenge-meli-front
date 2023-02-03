import type { AxiosResponse } from 'axios'
import axios from 'axios'

export const FetchInterceptor = (): void => {
  axios.interceptors.request.use(
    (request) => {
      console.log('Starting Request -> ', request)
      return request
    }
  )

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log('Finish Request -> ', response)
      return response
    },
    async (error) => {
      console.log('Interceptors Error -> ', error)
      return await Promise.reject(error)
    }
  )
}
