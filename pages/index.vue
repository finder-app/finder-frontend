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

<script>
export default {
  async asyncData(ctx) {
    try {
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
