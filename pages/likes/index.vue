<template>
  <v-container v-if="like">
    <h1>最新のいいね一覧</h1>
    <nuxt-link :to="`like/${like.sentUser.uid}`">
      <p>uid: {{ like.sentUser.uid }}</p>
    </nuxt-link>
    <!-- <p>{{ like.sentUser.email }}</p>
    <p>{{ like.sentUser.fullName }}</p>
    <p>{{ like.sentUser.gender }}</p> -->
    <app-user-detail :user="like.sentUser" />
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
import { Like } from '../../pb/like_pb'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const like = ref<Like.AsObject>()
    useAsync(async () => {
      try {
        const response = await app.$likeRepository.getOldestLike()
        like.value = response.data.like
        console.log('response', response)
      } catch (err) {
        console.error(err.response)
      }
    })
    // )
    return {
      like,
    }
  },
})
</script>
