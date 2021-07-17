<template>
  <v-container>
    <div class="mb-10">
      <h1>最新のいいね一覧</h1>
    </div>
    <template v-if="like">
      <nuxt-link :to="`like/${like.sentUser.uid}`">
        <p>uid: {{ like.sentUser.uid }}</p>
      </nuxt-link>
      <app-user-detail :user="like.sentUser" />
      <div class="d-flex">
        <v-btn @click="onClickLike()">
          Like
        </v-btn>
        <v-btn @click="onClickSkip(like.sentUser.uid)">
          Skip
        </v-btn>
      </div>
    </template>
    <template v-else>
      1件もありません
    </template>
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
    const getOldestLike = async () => {
      try {
        const response = await app.$likeRepository.getOldestLike()
        // 404の時はnullが返される。response.dataがnullならnullを代入して0件の表示に切り替え
        if (response.data === null) {
          like.value = null
          return
        }
        like.value = response.data.like
      } catch (err) {
        console.error(err.response)
      }
    }
    useAsync(async () => {
      await getOldestLike()
    })
    const onClickSkip = async (userUid: string) => {
      try {
        app.$likeRepository.skip(userUid)
        await getOldestLike()
        store.dispatch('message/successMessage', {
          message: 'スキップしました',
        })
      } catch (err) {
        console.error(err.response)
      }
    }
    return {
      like,
      onClickSkip,
    }
  },
})
</script>
