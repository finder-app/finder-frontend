import { Context } from '@nuxt/types'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'

export default (ctx: Context) => {
  ctx.app.$axios.onRequest((config: AxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${ctx.store.getters['getIdToken']}`
    console.log(config.headers.Authorization)
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
