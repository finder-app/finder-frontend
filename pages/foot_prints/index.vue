<template>
  <v-container>
    <h1>足跡一覧</h1>
    <div v-for="footPrint in footPrints" :key="footPrint.visitor.uid">
      <nuxt-link :to="`users/${footPrint.visitor.uid}`">
        <p>id: {{ footPrint.visitor.uid }}</p>
      </nuxt-link>
      <p>{{ footPrint.visitor.email }}</p>
      <p>{{ footPrint.visitor.gender }}</p>
      <p>{{ footPrint.visitor.fullName }}</p>
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
  useRouter
} from '@nuxtjs/composition-api'
import { FootPrint } from '../../finder-protocol-buffers/ts/foot_print_pb'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const footPrints = ref<FootPrint.AsObject[]>()
    useAsync(async () => {
      try {
        const response = await app.$footPrintRepository.GetFootPrints()
        footPrints.value = response
      } catch (err) {
        console.error(err.response)
      }
    })
    return {
      footPrints
    }
  }
})
</script>
