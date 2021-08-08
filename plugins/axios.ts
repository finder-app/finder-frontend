import { Context } from '@nuxt/types'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'

export default (ctx: Context) => {
  ctx.app.$axios.onRequest((config: AxiosRequestConfig) => {
    // NOTE: headerに認証情報を追加
    config.headers.Authorization = `Bearer ${ctx.store.getters['auth/getIdToken']}`
    console.log(config.headers.Authorization)

    // NOTE: config.dataをsnakecaseに変換したくないケースはreturnする
    if (
      config.data == undefined ||
      typeof config.data !== 'object' ||
      config.data instanceof FormData
    ) {
      return config
    }

    config.data = snakecaseKeys(config.data, { deep: true })
    return config
  })
  ctx.app.$axios.onResponse((response: AxiosResponse) => {
    // NOTE: Goのresponseはsnakecaseで返されるため、キャメルケースに変換
    response.data = camelcaseKeys(response.data, { deep: true })
    return response
  })
  ctx.app.$axios.onError((error: AxiosError) => {
    // NOTE: 401エラーが返されたら認証失敗してるので、sign-inページにリダイレクトさせる
    if (error.response?.status === 401) {
      ctx.store.dispatch('auth/unsetIdToken')
      ctx.redirect('/auth/sign-in')
    }

    if (error.response?.status === 500) {
      ctx.store.dispatch('message/errorMessage', {
        message: 'サーバーエラーが発生しました',
      })
    }
  })
}
