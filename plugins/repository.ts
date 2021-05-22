import { Plugin } from '@nuxt/types'
import { UserRepository } from '~/repository/user'
import { FootPrintRepository } from '~/repository/foot_print'

// NOTE: injectをするとapp配下に追加される。
// pluginsでexport default(ctx)=>だと、ctx.$Hogeみたいに取れるようになる
const RepositoryPlugin: Plugin = (ctx, inject) => {
  inject('userRepository', new UserRepository(ctx.app.$axios))
  inject('footPrintRepository', new FootPrintRepository(ctx.app.$axios))
}

export default RepositoryPlugin