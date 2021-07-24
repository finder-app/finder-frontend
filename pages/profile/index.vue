<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <nuxt-link to="/">
        BACK
      </nuxt-link>
      <!-- NOTE: compositionAPIを使うと、ライフサイクルの関係で表示できないため？ -->
      <app-user-detail v-if="user" :user="user" />
      <nuxt-link to="/profile/edit">
        edit
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
  useRoute,
  useStore,
  computed,
  useRouter,
} from '@nuxtjs/composition-api'
import { User } from '../../pb/user_pb'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const user = ref<User.AsObject>()
    useAsync(async () => {
      const response = await app.$profileRepository.getProfile()
      user.value = response.data.user
    })
    return {
      user,
    }
  },
})
</script>
