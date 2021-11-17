<template>
  <v-row justify="center" align="center">
    <v-col v-if="user" cols="12" sm="8" md="6">
      <nuxt-link to="/">BACK</nuxt-link>
      <app-user-detail :user="user" />
      <template v-if="user.liked">
        <v-btn disabled>
          いいね済み
        </v-btn>
      </template>
      <template v-else>
        <v-btn @click="onClickLike(user.uid)">
          いいね！
        </v-btn>
      </template>
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
  inject
} from '@nuxtjs/composition-api'
import { User } from '../../../finder-protocol-buffers/ts/user_pb'
import {
  UserRepositoryClient,
  UserRepositoryInterface
} from '../../../repository/user'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const user = ref<User.AsObject>()

    const userClient = inject<UserRepositoryInterface>(
      UserRepositoryClient
    ) as UserRepositoryInterface

    useAsync(async () => {
      user.value = await userClient.getUserByUid(route.value.params.uid)
    })
    const onClickLike = async (userUid: string) => {
      try {
        await app.$likeRepository.createLike(userUid)
        if (user.value !== undefined) {
          user.value.liked = true
        }
        store.dispatch('message/successMessage', {
          message: 'いいねしました！'
        })
      } catch (err) {
        store.dispatch('message/errorMessage', {
          message: '既にいいね済みです！'
        })
        console.error(err.response)
      }
    }
    return {
      user,
      onClickLike
    }
  }
})
</script>
