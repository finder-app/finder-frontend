<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-text-field v-model="email">{{ email }}</v-text-field>
      <v-text-field v-model="password">{{ email }}</v-text-field>
      <v-btn @click="signIn()">ログインする！</v-btn>

      <nuxt-link to="/auth/sign_up">
        <v-btn>新規登録ページに移動！</v-btn>
      </nuxt-link>
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
    async signIn() {
      try {
        const response = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        const user = response.user
        const idToken = await user.getIdToken(/* forceRefresh */ true)
        console.log(user)
        this.$store.dispatch('setIdToken', { idToken })
        this.$router.push('/')
      } catch(err) {
        console.error(err)
        console.error(err.response)
      }
    },
  }
}
</script>
