<template>
  <h1>rooms/{{ $route.params.id }}</h1>
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
import { User } from '../../../pb/user_pb'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const user = ref<User.AsObject>()
    useAsync(async () => {})
    return {
      user
    }
  }
})
</script>
