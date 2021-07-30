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
            v-model="CreateUserReq.email"
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
            v-model="password"
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
            v-model="CreateUserReq.lastName"
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
            v-model="CreateUserReq.firstName"
            label="名前（名）"
            :error-messages="errors"
            outlined
          >
          </v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required" name="性別">
          <v-select
            v-model="CreateUserReq.gender"
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
  useRouter
} from '@nuxtjs/composition-api'
import firebase from '../../plugins/firebase'
<<<<<<< HEAD
import { CreateUserReq } from '../../finder-protocol-buffers/ts/user_pb'
=======
import { CreateUserReq } from '../../pb/user_pb'
>>>>>>> 656c735... fix/signUpの型を変更

export default defineComponent({
  layout: 'auth',
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
<<<<<<< HEAD
    interface SignUpUser extends CreateUserReq.AsObject {
      password: string
    }
    const signUpUser = ref<SignUpUser>({
=======
    const CreateUserReq = ref<CreateUserReq.AsObject>({
>>>>>>> 656c735... fix/signUpの型を変更
      uid: '',
      email: 'ohishikaito@gmail.com',
      lastName: '有村',
      firstName: 'かすみ',
      gender: '女性',
      thumbnail: ''
    })
    const password = ref<string>('')
    const signUp = async () => {
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            CreateUserReq.value.email,
            password.value
          )
        const firebaseUser = response.user!
        const idToken = await firebaseUser.getIdToken(/* forceRefresh */ true)
        store.dispatch('setIdToken', { idToken })
        createUser(firebaseUser)
        router.push('/')
      } catch (err) {
        if (err.code === 'auth/email-already-in-use') {
          store.dispatch('message/errorMessage', {
            message: '登録したEメールは既に使用されています。'
          })
        } else {
          store.dispatch('message/errorMessage', {
            message: 'internal server errorr'
          })
        }
        console.error(err.response)
      }
    }
    const createUser = async (firebaseUser: firebase.default.User) => {
      CreateUserReq.value.uid = firebaseUser.uid
      await app.$userRepository.createUser(CreateUserReq.value)
    }
    return {
      CreateUserReq,
      password,
      signUp
    }
  }
})
</script>
