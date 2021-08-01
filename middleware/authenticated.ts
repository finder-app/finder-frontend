import { Context } from '@nuxt/types'

export default function (ctx: Context) {
  if (ctx.store.getters['getIdToken'] === null) {
    ctx.redirect('/auth/sign-in')
  }
}
