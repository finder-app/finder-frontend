import { Context } from '@nuxt/types'

// NOTE: nuxt読み込み時に実行したいactionsをここに書く
export default async (ctx: Context) => {
  await ctx.store.dispatch('auth/nuxtClientInit', ctx)
}