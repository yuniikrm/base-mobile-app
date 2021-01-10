/* eslint-disable no-param-reassign */
import axios from 'axios'
import { API_URL } from '@config'

const baseUrl = API_URL
// const baseTimeout = properties.api.timeout

const axiosDefault = axios.create({
  baseURL: baseUrl
  // timeout: baseTimeout,
  // adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
  // enabledByDefault: false,
  // cacheFlag: 'useCache'
  // defaultCache
  // })
})

// interceptor
axiosDefault.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axiosDefault.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default axiosDefault
