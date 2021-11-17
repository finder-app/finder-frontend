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
          />
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
          />
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
          />
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
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required" name="性別">
          <v-select
            v-model="signUpUser.gender"
            :items="genders"
            label="性別"
            outlined
            :error-messages="errors"
          />
        </ValidationProvider>
        <v-btn :disabled="invalid" @click="signUp()">
          新規で登録しまーす！
        </v-btn>
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
  inject
} from '@nuxtjs/composition-api'
import firebase from '../../plugins/firebase'
import { CreateUserReq } from '../../finder-protocol-buffers/ts/user_pb'
import {
  UserRepositoryClient,
  UserRepositoryInterface
} from '../../repository/user'

export default defineComponent({
  layout: 'auth',
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const userClient = inject<UserRepositoryInterface>(
      UserRepositoryClient
    ) as UserRepositoryInterface

    const signUpUser = ref<CreateUserReq.AsObject>({
      uid: '',
      email: 'ohishikaito@gmail.com',
      lastName: '有村',
      firstName: 'かすみ',
      gender: '女性',
      thumbnail: ''
    })
    const password = ref<string>('')
    const genders = ['男性', '女性']
    const signUp = async () => {
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            signUpUser.value.email,
            password.value
          )
        const firebaseUser = response.user!
        const idToken = await firebaseUser.getIdToken(/* forceRefresh */ true)
        store.dispatch('auth/setIdToken', { idToken })
        await createUser(firebaseUser)
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
      signUpUser.value.uid = firebaseUser.uid
      await userClient.createUser(signUpUser.value)
    }
    return {
      signUpUser,
      password,
      genders,
      signUp
    }
  }
})
</script>
