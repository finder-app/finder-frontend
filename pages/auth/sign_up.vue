<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <nuxt-link to="/auth/sign_in">
        <v-btn>signIn</v-btn>
      </nuxt-link>

      <v-text-field v-model="email"></v-text-field>
      <v-text-field v-model="password"></v-text-field>
      <v-btn @click="signUp()">signUp</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      email: 'ohishikaito@gmail.com',
      password: 'adaadaada',
    }
  },
  methods: {
    async signUp() {
      try {
      const response = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      const user = response.user
      console.log(response, 'response')
      console.log(user, 'user')
      const idToken = await user.getIdToken(/* forceRefresh */ true)
      this.$store.dispatch('setIdToken', { idToken })
      const req = {
        email: user.email,
        lastName: "大石",
        firstName: "海渡",
      }
      await this.$axios.post("users/create", req)
      // ログイン状態を保持するため
      } catch(err) {
        console.error(err)
        console.error(err.response)
      }
    },
  }
}
</script>
