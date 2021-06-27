<template>
  <v-container>
    <div v-for="user in users" :key="user.uid">
      <nuxt-link :to="`users/${user.uid}`">
        <p>id: {{ user.uid }}</p>
      </nuxt-link>
      <p>{{ user.email }}</p>
      <p>{{ fullName(user) }}</p>
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
    try {
      const response = await ctx.app.$userRepository.GetUsers()
      const users = response.data
      console.log(response)
      return {
        users,
      }
    } catch (err) {
      console.error(err.response)
    }
  },
  computed: {
    fullName: () => {
      return (user: any): string => user.lastName + user.firstName
    },
  },
})
</script>
