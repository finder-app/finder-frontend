<template>
  <v-container>
    <div class="card-wrapper">
      <app-user-detail v-if="user" :user="user" />
      <nuxt-link to="/profile/edit">
        <app-btn class="mt-5">編集ページに移動する</app-btn>
      </nuxt-link>
    </div>
  </v-container>
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
