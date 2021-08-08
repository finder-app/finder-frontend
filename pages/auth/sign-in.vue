<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-text-field v-model="signInUser.email"></v-text-field>
      <v-text-field v-model="signInUser.password"></v-text-field>
      <v-btn @click="signIn()">ログインする！</v-btn>

      <nuxt-link to="/auth/sign-up">
        <v-btn>新規登録ページに移動！</v-btn>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  ref,
  reactive,
  useRoute,
  useStore,
  computed,
  useRouter
} from '@nuxtjs/composition-api'
import firebase from '../../plugins/firebase'

export default defineComponent({
  layout: 'auth',
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const signInUser = ref({
      email: 'ohishikaito@gmail.com',
      password: 'adaadaada'
    })
    const signIn = async () => {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(
            signInUser.value.email,
            signInUser.value.password
          )
        const firebaseUser = response.user!
        const idToken = await firebaseUser.getIdToken(/* forceRefresh */ true)
        store.dispatch('auth/setIdToken', { idToken })
        // NOTE: layoutが変わる影響でsuccessMessageが表示できないため、遅延実行する
        setTimeout(() => {
          store.dispatch('message/successMessage', {
            message: 'ログインしました。'
          })
        }, 100)
        router.push('/')
      } catch (err) {
        console.error(err.response)
      }
    }
    return {
      signInUser,
      signIn
    }
  }
})
</script>
