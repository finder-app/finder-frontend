import { Plugin } from '@nuxt/types'
// import { UserRepository } from '~/repository/user'
import { FootPrintRepository } from '~/repository/foot_print'
import { ProfileRepository } from '~/repository/profile'
import { LikeRepository } from '~/repository/like'
import { RoomRepository } from '~/repository/room'

// NOTE: injectをするとapp配下に追加される。
// pluginsでexport default(ctx)=>だと、ctx.$Hogeみたいに取れるようになる
const RepositoryPlugin: Plugin = (ctx, inject) => {
  const axios = ctx.app.$axios
  // const apollo = ctx.app.apolloProvider.defaultClient
  // inject('userRepository', new UserRepository(axios))
  inject('footPrintRepository', new FootPrintRepository(axios, ctx.store))
  inject('profileRepository', new ProfileRepository(axios))
  inject('likeRepository', new LikeRepository(axios))
  inject('roomRepository', new RoomRepository(axios))
}

export default RepositoryPlugin