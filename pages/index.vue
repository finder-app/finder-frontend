<template>
  <v-container>
    <div class="mb-10">
      <h1>さがす</h1>
    </div>
    <div class="grid">
      <user-card v-for="user in users" :key="user.uid" :user="user" />
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
  inject
} from '@nuxtjs/composition-api'
import { User } from '../finder-protocol-buffers/ts/user_pb'
import {
  UserRepositoryClient,
  UserRepositoryInterface
} from '../repository/user'
export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const users = ref<User.AsObject[]>([])

    const userClient = inject<UserRepositoryInterface>(
      UserRepositoryClient
    ) as UserRepositoryInterface

    useAsync(async () => {
      try {
        users.value = await userClient.GetUsers()
      } catch (err) {
        console.error(err.response)
      }
    })
    return {
      users
    }
  }
})
</script>

<style lang="scss" scoped>
.grid {
  // NOTE: gapを追加すると、grid-gapも追加される
  display: grid;
  gap: 24px 16px;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
}
</style>
