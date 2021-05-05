<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <nuxt-link to="/auth/sign-in">
        <v-btn>signInページに移動する！</v-btn>
      </nuxt-link>

      <v-text-field v-model="email"></v-text-field>
      <v-text-field v-model="password"></v-text-field>
      <v-btn @click="signUp()">新規で登録しまーす！</v-btn>
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

        // idToken保存した後にリクエスト送るとエラー吐く
        // http methodがOPTIONSになる
        // idTokenが送れなくて、config.dataもJSON.stringifyの文字列化してる
        // 前はgetリクエストとかでもエラー吐いてたけど解消した　原因は不明
        const req = {
          uid: user.uid,
          email: user.email,
          lastName: "大石",
          firstName: "海渡",
          isMale: 1,
        }
        await this.$axios.post("users/create", req)
        this.$router.push('/')
      } catch(err) {
        console.error(err)
        console.error(err.response)
      }
    },
  }
}
</script>
