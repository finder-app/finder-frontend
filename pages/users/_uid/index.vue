<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <nuxt-link to="/">BACK</nuxt-link>
      <v-btn @click="test(user.uid)">test</v-btn>
      <!-- NOTE: compositionAPIを使うと、ライフサイクルの関係で表示できないため？ -->
      <template v-if="user">
        <app-user-detail :user="user"></app-user-detail>
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useAsync,
  useRoute,
} from '@nuxtjs/composition-api'
import { User } from '../../../apollo/model/generated'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const user = ref<User>()
    useAsync(async () => {
      user.value = await app.$userRepository.GetUserByUid(
        route.value.params.uid,
      )
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
