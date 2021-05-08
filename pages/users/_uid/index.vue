<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <nuxt-link to="/">BACK</nuxt-link>

      <p>id: {{ user.uid }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.createdAt }}</p>

    </v-col>
  </v-row>
</template>

<script>

export default {
  async asyncData(ctx) {
    try {
      const response = await ctx.$axios.get(`/users/${ctx.route.params.uid}`)
      const user = response.data
      return {
        user,
      }
    } catch(err) {
      console.error(err, 'err')
      console.error(err.response, 'err.response')
    }
  },
}
</script>
