<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1>{{ email }}</h1>
      <h1>{{ password }}</h1>
      <v-btn @click="signIn()">signIn</v-btn>
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
      console.log(response, 'response')
      console.log(user, 'user')
        const idToken = await user.getIdToken(/* forceRefresh */ true)
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
