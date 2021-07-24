<template>
  <v-container>
    <div class="mb-10">
      <h1>お相手から</h1>
    </div>
    <!-- NOTE: いいねがない場合は空のobjectを代入しているので、 like.id で存在するlikeか判別している -->
    <template v-if="like && like.id">
      <div class="card-wrapper">
        <div class="user-detail d-flex">
          <div class="left-card d-flex flex-column mr-5">
            <v-card class="mb-3">
              <nuxt-link :to="`users/${like.sentUser.uid}`">
                <v-img
                  src="https://4.bp.blogspot.com/-bTipX3Vmpts/Wn1ZgUbOHXI/AAAAAAABKM4/b31Jvq8aWssiswuiO19BAJmmAC5WAzXwACLcBGAs/s800/character_boy_normal.png"
                />
              </nuxt-link>
            </v-card>
            <v-card class="pa-7">
              <h2>{{ like.sentUser.fullName }}</h2>
              <p>{{ 'N' }}歳 東京</p>
              <p class="pt-2">{{ 'ここに一言コメントが入ります' }}</p>
            </v-card>
          </div>
          <div class="right-card">
            <v-card class="pa-10 mb-3">
              <h3 class="pb-3">自己紹介文</h3>
              {{ 'ここに自己紹介文が入る予定です' }}
            </v-card>
            <v-card class="pa-10">
              <h3>プロフィール</h3>
            </v-card>
          </div>
        </div>
        <!-- <app-user-detail :user="like.sentUser" /> -->

        <div class="d-flex justify-center mt-4">
          <v-btn
            @click="onClickSkip(like.sentUserUid)"
            icon
            x-large
            class="mr-5 border-lightgray"
          >
            <v-icon>mdi-thumb-down</v-icon>
          </v-btn>
          <v-btn
            @click="onClickConsent(like.sentUserUid)"
            icon
            x-large
            color="pink"
            class="border-lightgray"
          >
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
        </div>
      </div>
    </template>

    <!-- NOTE: いいねが1件もない場合 -->
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
    // NOTE: likeがなかった時に使用するnullを表現するobject
    const likeNullObject: Like.AsObject = {
      id: 0,
      sentUserUid: '',
      recievedUserUid: '',
      skipped: false,
      consented: false,
    }
    const like = ref<Like.AsObject>(likeNullObject)
    const getOldestLike = async () => {
      try {
        const response = await app.$likeRepository.getOldestLike()
        // 404の時はnullが返される。response.dataがnullならnullを代入して0件の表示に切り替え
        if (response.data === null) {
          like.value = likeNullObject
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
    const onClickSkip = async (sentUserUid: string) => {
      try {
        await app.$likeRepository.skip(sentUserUid)
        await getOldestLike()
        store.dispatch('message/successMessage', {
          message: 'スキップしました',
        })
      } catch (err) {
        store.dispatch('message/errorMessage', {
          message: 'エラーが発生しました。画面を更新して再度お試しください。',
        })
        console.error(err.response)
      }
    }
    const onClickConsent = async (sentUserUid: string) => {
      try {
        await app.$likeRepository.consent(sentUserUid)
        store.dispatch('message/successMessage', {
          message: 'マッチングしました！',
        })
      } catch (err) {
        store.dispatch('message/errorMessage', {
          message: 'エラーが発生しました。画面を更新して再度お試しください。',
        })
        console.error(err.response)
      }
    }
    return {
      like,
      onClickSkip,
      onClickConsent,
    }
  },
})
</script>

<style lang="scss" scoped>
.user-detail {
  .v-card {
    border-radius: 10px;
  }
}
.left-card {
  width: 100%;
  max-width: 320px;
}
.right-card {
  width: 100%;
  max-width: 375px;
}
.border-lightgray {
  border: 1px solid lightgray;
}
</style>
