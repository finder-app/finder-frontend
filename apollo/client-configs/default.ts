import { Context } from '@nuxt/types'
import { onError } from 'apollo-link-error'

export default (ctx: Context) => {
  const errorHandler = onError(({ networkError, graphQLErrors }) => {
    console.error(networkError, graphQLErrors)

    // TODO: 今後、バックエンドで認証失敗時は401エラーを返せるようにする
    // console.log("hoge")
    // console.log(networkError)
    // if (!graphQLErrors) return

    // graphQLErrors.forEach(err => {
    //   console.log(err, 'err')
    //   console.log(err.extensions, 'err.extensions')
    //   if (err.extensions && err.extensions.status === 401) {
    //     ctx.redirect('/auth/sign-in')
    //   }
    // })

    // if (graphQLErrors) {
    //   graphQLErrors.forEach((err) => {
    //     if (err.extensions) {
    //       if (err.extensions.status === 401) {
    //         ctx.redirect('/auth/sign-in')
    //       }
    //     }
    //   })
    // }
  })
  return {
    httpEndpoint: `${process.env.BACKEND_ENDPOINT}/query`,
    // NOTE: getAuthでheader Authorizationに追加される
    getAuth: () => `Bearer ${ctx.store.getters.getIdToken}`,
    link: errorHandler
  }
}