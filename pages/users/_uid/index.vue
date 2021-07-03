<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <nuxt-link to="/">BACK</nuxt-link>
      <v-btn @click="test(user.uid)">test</v-btn>
      <!-- NOTE: compositionAPIを使うと、ライフサイクルの関係で表示できないため？ -->
      <!-- <template v-if="user"> -->
      <app-user-detail v-if="user" :user="user"></app-user-detail>
      <!-- </template> -->
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  ref,
  useRoute,
  useStore,
  computed,
  useRouter,
} from '@nuxtjs/composition-api'
import { User } from '../../../pb/user_pb'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const user = ref<User.AsObject>()
    useAsync(async () => {
      const response = await app.$userRepository.getUserByUid(
        route.value.params.uid,
      )
      user.value = response.data.user
    })
    const test = (arg: any) => {
      console.log(arg, 'arg')
      console.log(user.value, 'user.value')
    }
    return {
      user,
      test,
    }
  },
})
</script>
