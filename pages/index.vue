<template>
  <v-container>
    <div v-for="user in users" :key="user.uid">
      <nuxt-link :to="`users/${user.Uid}`">
        <p>id: {{ user.Uid }}</p>
      </nuxt-link>
      <p>{{ user.Email }}</p>
      <p>{{ fullName(user) }}</p>
      <p>{{ user.Gender }}</p>
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
    const users: User[] = await ctx.app.$userRepository.GetUsers()
    return {
      users,
    }
  },
  computed: {
    fullName: () => {
      return (user: User): string => user.LastName + user.FirstName
    },
  },
})
</script>
