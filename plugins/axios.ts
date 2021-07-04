import { Context } from '@nuxt/types'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'

export default (ctx: Context) => {
  ctx.app.$axios.onRequest((config: AxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${ctx.store.getters['getIdToken']}`
    console.log(config.headers.Authorization)
    if (config.data !== undefined) {
      config.data = snakecaseKeys(config.data, { deep: true })
    }
    return config
  })
  ctx.app.$axios.onResponse((response: AxiosResponse) => {
    response.data = camelcaseKeys(response.data, { deep: true })
    return response
  })
  ctx.app.$axios.onError((error: AxiosError) => {
    if (error.response?.status === 401) {
      ctx.store.dispatch('unsetIdToken')
      ctx.redirect('/auth/sign-in')
    }
  })
}
