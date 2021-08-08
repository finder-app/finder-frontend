import { Context } from '@nuxt/types'
import { onError } from 'apollo-link-error'

export default (ctx: Context) => {
  const errorHandler = onError(({ networkError, graphQLErrors }) => {
    console.error(networkError, graphQLErrors)
    if (!graphQLErrors) return

    graphQLErrors.forEach(err => {
      if (err.extensions && err.extensions.status === 401) {
        ctx.redirect('/auth/sign-in')
      }
    })
  })
  return {
    httpEndpoint: `${process.env.BACKEND_ENDPOINT}/query`,
    // NOTE: getAuthでheader Authorizationに追加される
    getAuth: () => `Bearer ${ctx.store.getters['auth/getIdToken']}`,
    link: errorHandler
  }
}