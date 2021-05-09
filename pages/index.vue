<template>
  <v-container>
    <div v-for="user in users" :key="user.uid">
      <nuxt-link :to="`users/${user.uid}`">
        <p>id: {{ user.uid }}</p>
      </nuxt-link>
      <p>{{ user.email }}</p>
      <p>{{ user.isMale ? "男" : "メス" }}</p>
    </div>
  </v-container>
</template>

<script>
import getUidByRefreshToken from '~/plugins/getUidByRefreshToken'

export default {
  // asyncDataの処理を共通化する
  async asyncData(ctx) {
    try {
      await getUidByRefreshToken(ctx.store)
      const response = await ctx.$axios.get("/users")
      const users = response.data
      return {
        users,
      }
    } catch(err) {
      console.error(err)
    }
  },
}
</script>
