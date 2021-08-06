<template>
  <v-container>
    <div class="mb-10">
      <h1>お相手から</h1>
    </div>
    <!-- NOTE: いいねがある場合 いいねがない場合は空のobjectを代入しているので、like.idでlikeが存在するか判別 -->
    <template v-if="like && like.id">
      <div class="card-wrapper">
        <app-user-detail :user="like.sentUser" />

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

      <v-dialog v-model="likedDialog" width="700">
        <v-card>
          <v-card-title class="pa-10 d-flex justify-center">
            <h3>マッチングが成立しました！</h3>
          </v-card-title>

          <div class="d-flex liked-dialog">
            <v-img
              class="border-lightgray liked-dialog-image"
              src="https://4.bp.blogspot.com/-bTipX3Vmpts/Wn1ZgUbOHXI/AAAAAAABKM4/b31Jvq8aWssiswuiO19BAJmmAC5WAzXwACLcBGAs/s800/character_boy_normal.png"
            />
            <v-icon x-large class="ma-10" color="pink lighten-2">
              mdi-cards-heart
            </v-icon>
            <v-img
              class="border-lightgray liked-dialog-image"
              src="https://4.bp.blogspot.com/-bTipX3Vmpts/Wn1ZgUbOHXI/AAAAAAABKM4/b31Jvq8aWssiswuiO19BAJmmAC5WAzXwACLcBGAs/s800/character_boy_normal.png"
            />
          </div>

          <v-card-actions class="d-flex flex-column pb-10">
            <app-btn
              color="pink lighten-2"
              class="white--text my-10"
              rounded
              @click.native="onClickGoToRoom()"
            >
              さっそくトークスタート！
            </app-btn>
            <v-btn icon @click="onClickCloseLikedDialog()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
  useRouter
} from '@nuxtjs/composition-api'
import { Like } from '../../finder-protocol-buffers/ts/like_pb'
import { Room } from '../../finder-protocol-buffers/ts/room_pb'

// NOTE: likeがなかった時に使用するnullを表現するobject
const likeNullObject: Like.AsObject = {
  id: 0,
  sentUserUid: '',
  recievedUserUid: '',
  skipped: false,
  consented: false
}
const like = ref<Like.AsObject>(likeNullObject)
const likedDialog = ref<boolean>(false)
const room = ref<Room.AsObject>()

const openLikedDialog = () => {
  likedDialog.value = true
}
const closeLikedDialog = () => {
  likedDialog.value = false
}

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
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
          message: 'スキップしました'
        })
      } catch (err) {
        console.error(err.response)
      }
    }
    const onClickConsent = async (sentUserUid: string) => {
      try {
        const response = await app.$likeRepository.consent(sentUserUid)
        room.value = response.data.room
        openLikedDialog()
      } catch (err) {
        console.error(err.response)
      }
    }
    const onClickGoToRoom = () => {
      router.push(`/rooms/${room.value!.id}`)
      closeLikedDialog()
    }
    const onClickCloseLikedDialog = async () => {
      // NOTE: いいねdialogを閉じた後に次のユーザーを表示したいため
      await getOldestLike()
      closeLikedDialog()
    }
    return {
      like,
      room,
      likedDialog,
      onClickSkip,
      onClickConsent,
      onClickGoToRoom,
      onClickCloseLikedDialog
    }
  }
})
</script>

<style lang="scss" scoped>
.liked-dialog {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.liked-dialog-image {
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
}
</style>
