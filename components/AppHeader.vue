<template>
  <v-app-bar fixed app>
    <nuxt-link to="/">
      <h1>finder</h1>
    </nuxt-link>
    <template v-if="authenticated">
      <v-btn @click="signOut()" color="green mx-5">signOut</v-btn>
    </template>
    <nuxt-link to="/foot_prints"> 足跡数： {{ footPrintCount }}</nuxt-link>
  </v-app-bar>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useAsync,
  useRouter,
  useStore,
  computed,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const store = useStore()
    const router = useRouter()
    useAsync(async () => {
      await app.$footPrintRepository.GetUnreadCount()
    })

    // NOTE: ワンライナーはreturnなし、ブロックだとreturnが必要
    // const footPrintCount = computed(() => store.getters.getFootPrintCount)
    const footPrintCount = computed((): number => {
      return store.getters.getFootPrintCount
    })
    const authenticated = computed((): boolean => {
      return store.getters['getIdToken'] !== null
    })

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
