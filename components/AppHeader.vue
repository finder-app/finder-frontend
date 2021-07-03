<template>
  <v-app-bar fixed app>
    <nuxt-link to="/">
      <h1>finder</h1>
    </nuxt-link>
    <template v-if="authenticated">
      <v-btn @click="signOut()" color="green mx-5">signOut</v-btn>
    </template>
    <nuxt-link to="/foot_prints">未読の足跡数： {{ footPrintCount }}</nuxt-link>
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
    const footPrintCount = computed(
      (): number => store.getters.getFootPrintCount,
    )
    const authenticated = computed(
      (): boolean => store.getters['getIdToken'] !== null,
    )
    const signOut = () => {
      store.dispatch('unsetIdToken')
      router.push('/auth/sign-in')
    }
    return {
      footPrintCount,
      authenticated,
      signOut,
    }
  },
})
</script>
