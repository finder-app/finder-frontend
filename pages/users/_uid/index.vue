<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <nuxt-link to="/">BACK</nuxt-link>
      {{ user }}
      <p>id: {{ user.uid }}</p>
      <v-btn @click="test(user.uid)">test</v-btn>
      <!-- props関係なくvalueが取れてないからダメ -->
      <!-- <app-user-detail :user="user"></app-user-detail> -->
      <!-- <p>{{ user.email }}</p> -->
      <!-- <p>{{ user.createdAt }}</p> -->
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
  onMounted,
} from '@nuxtjs/composition-api'
// import { onMounted } from 'vue'

import { User } from '../../../apollo/model/generated'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    // uidが反応するのは、多分ライフサイクルあたりが怪しそう
    const user = ref<User>()
    useAsync(async () => {
      user.value = await app.$userRepository.GetUserByUid(
        route.value.params.uid,
      )
    })
    const hoge = async () => {
      user.value = await app.$userRepository.GetUserByUid(
        route.value.params.uid,
      )
    }
    onMounted(hoge)
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
