<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="my-5">
        <nuxt-link to="/auth/sign-in">
          <v-btn>signInページに移動する！</v-btn>
        </nuxt-link>
      </div>

      <ValidationObserver ref="form" v-slot="{ invalid }">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|email"
          name="メールアドレス"
        >
          <v-text-field
            v-model="signUpUser.email"
            label="メールアドレス"
            :error-messages="errors"
            outlined
          >
          </v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="パスワード"
        >
          <v-text-field
            v-model="signUpUser.password"
            label="パスワード"
            :error-messages="errors"
            outlined
            type="password"
          >
          </v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="名前（性）"
        >
          <v-text-field
            v-model="signUpUser.lastName"
            label="名前（性）"
            :error-messages="errors"
            outlined
          >
          </v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="名前（名）"
        >
          <v-text-field
            v-model="signUpUser.firstName"
            label="名前（名）"
            :error-messages="errors"
            outlined
          >
          </v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required" name="性別">
          <v-select
            v-model="signUpUser.gender"
            :items="['男性', '女性']"
            label="性別"
            outlined
            :error-messages="errors"
          ></v-select>
        </ValidationProvider>
        <v-btn :disabled="invalid" @click="signUp()"
          >新規で登録しまーす！</v-btn
        >
      </ValidationObserver>
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
  useRouter,
} from '@nuxtjs/composition-api'
import firebase from '../../plugins/firebase'
import { User } from '../../pb/user_pb'

export default defineComponent({
  layout: 'auth',
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    interface SignUpUser extends User.AsObject {
      password: string
    }
    const signUpUser = ref<SignUpUser>({
      uid: '',
      email: 'ohishikaito@gmail.com',
      password: 'adaadaada',
      lastName: '有村',
      firstName: 'かすみ',
      gender: '女性',
      //   // NOTE: fullNameをつけないとTSの型でエラー吐く nullでもいけないかなあ〜何とかして
      fullName: '',
    })
    const signUp = async () => {
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            signUpUser.value.email,
            signUpUser.value.password,
          )
        const firebaseUser = response.user!
        const idToken = await firebaseUser.getIdToken(/* forceRefresh */ true)
        store.dispatch('setIdToken', { idToken })
        createUser(firebaseUser)
        router.push('/')
      } catch (err) {
        if (err.code === 'auth/email-already-in-use') {
          store.dispatch('message/errorMessage', {
            message: '登録したEメールは既に使用されています。',
          })
        } else {
          store.dispatch('message/errorMessage', {
            message: 'internal server errorr',
          })
        }
        console.error(err.response)
      }
    }
    const createUser = async (firebaseUser: firebase.default.User) => {
      signUpUser.value.uid = firebaseUser.uid
      await app.$userRepository.createUser(signUpUser.value)
    }
    return {
      signUpUser,
      signUp,
    }
  },
})
</script>
