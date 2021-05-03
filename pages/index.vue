<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div v-for="user in users" :key="user.id">
        <nuxt-link :to="`users/${user.id}`">
          <p>id: {{ user.id }}</p>
        </nuxt-link>
        <p>{{ user.email }}</p>
      </div>
      <template v-if="authenticated">
        <p>ログイン中</p>
        <v-btn @click="signOut()">signOut</v-btn>
      </template>
      <template v-else>
        <nuxt-link to="/auth/sign_up">
          <v-btn>signUp</v-btn>
        </nuxt-link>
        <nuxt-link to="/auth/sign_in">
          <v-btn>signIn</v-btn>
        </nuxt-link>
      </template>
    </v-col>
  </v-row>
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
  computed: {
    authenticated() {
      return this.$store.getters['getIdToken']
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch('unsetIdToken')
    },
  }
}
</script>
