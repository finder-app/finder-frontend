<template>
  <v-container>
    <div v-for="user in users" :key="user.uid">
      <nuxt-link :to="`users/${user.uid}`">
        <p>id: {{ user.uid }}</p>
      </nuxt-link>
      <p>{{ user.email }}</p>
      <p>{{ fullName(user) }}</p>
      <p>{{ user.gender }}</p>
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
import { User } from '../pb/user_pb'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const users = ref<User.AsObject[]>()
    useAsync(async () => {
      const response = await app.$userRepository.GetUsers()
      users.value = response.data.users
    })
    const fullName = computed(() => (user: User.AsObject): string =>
      user.lastName + user.firstName,
    )
    return {
      users,
      fullName,
    }
  },
})
</script>
