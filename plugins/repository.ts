import { Plugin } from '@nuxt/types'
import { UserRepository } from '~/repository/user'

// NOTE: injectをするとapp配下に追加される。
// pluginsでexport default(ctx)=>だと、ctx.$Hogeみたいに取れるようになる
const RepositoryPlugin: Plugin = (ctx, inject) => {
  inject('userRepository', new UserRepository(ctx.app.$axios))
}

export default RepositoryPlugin