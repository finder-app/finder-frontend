import { Plugin } from '@nuxt/types'
import { UserRepository } from '~/repository/user'
import { FootPrintRepository } from '~/repository/foot_print'

// NOTE: injectをするとapp配下に追加される。
// pluginsでexport default(ctx)=>だと、ctx.$Hogeみたいに取れるようになる
const RepositoryPlugin: Plugin = (ctx, inject) => {
  const axios = ctx.app.$axios
  const apollo = ctx.app.apolloProvider.defaultClient
  inject('userRepository', new UserRepository(axios, apollo))
  inject('footPrintRepository', new FootPrintRepository(axios, apollo, ctx.store))
}

export default RepositoryPlugin