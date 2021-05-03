<template>
  <v-container>
    <div v-for="user in users" :key="user.id">
      <nuxt-link :to="`users/${user.id}`">
        <p>id: {{ user.id }}</p>
      </nuxt-link>
      <p>{{ user.email }}</p>
    </div>
  </v-container>
</template>

<script>
export default {
  async asyncData(ctx) {
    try {
      const response = await ctx.$axios.get("users/index")
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
