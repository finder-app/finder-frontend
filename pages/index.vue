<template>
  <v-container>
    <div v-for="user in users" :key="user.uid">
      <nuxt-link :to="`users/${user.uid}`">
        <p>id: {{ user.uid }}</p>
      </nuxt-link>
      <p>{{ user.email }}</p>
      <p>{{ user.gender }}</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { User } from '../apollo/model/generated'

export default Vue.extend({
  // TODO: asyncDataの返り値をPromise<User[]>にしたいけど、returnでエラー吐く
  async asyncData(ctx: Context): Promise<any> {
    // const users: Promise<User[]> = await ctx.app.$userRepository.GetUsers()
    const users: User[] = await ctx.app.$userRepository.GetUsers()
    return {
      users
    }
  }
})
// NOTE: js version
// export default {
//   async asyncData(ctx) {
//     try {
//       const users = await ctx.$userRepository.GetUsers()
//       return {
//         users
//       }
//     } catch (err) {
//       console.error(err)
//     }
//   }
// }
</script>
