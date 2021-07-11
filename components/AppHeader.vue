<template>
  <v-app-bar fixed app>
    <nuxt-link to="/">
      <h1>finder</h1>
    </nuxt-link>
    <v-btn @click="signOut()" color="green mx-5">signOut</v-btn>
    <nuxt-link to="/foot_prints">未読の足跡数： {{ unreadCount }}</nuxt-link>
    <nuxt-link class="ml-10" to="/profile">プロフィール</nuxt-link>
    <nuxt-link class="ml-10" to="/likes">いいね</nuxt-link>
  </v-app-bar>
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

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    useAsync(async () => {
      // NOTE: storeからaxios.getすると読み込み順番のせいか認証ができない
      try {
        await app.$footPrintRepository.getUnreadCount()
      } catch (err) {
        console.error(err.response)
      }
    })
    // NOTE: ワンライナーはreturnなし、ブロックだとreturnが必要
    const unreadCount = computed((): number => store.getters.getUnreadCount)
    const signOut = () => {
      store.dispatch('unsetIdToken')
      router.push('/auth/sign-in')
      setTimeout(
        () =>
          store.dispatch('message/successMessage', {
            message: 'ログアウトしました。',
          }),
        100,
      )
    }
    return {
      unreadCount,
      signOut,
    }
  },
})
</script>
