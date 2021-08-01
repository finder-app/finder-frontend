<template>
  <div>
    <h2>rooms/{{ $route.params.id }}</h2>
    <template v-for="message in messages">
      {{ message }}
    </template>
  </div>
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
import { Message } from '../../../pb/message_pb'

const messages = ref<Message.AsObject[]>([])

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    useAsync(async () => {
      try {
        const response = await app.$axios.get(
          `/rooms/${route.value.params.id}/messages`
        )
        messages.value = response.data.messages
      } catch (err) {
        console.error(err.response)
      }
    })
    return {
      messages
    }
  }
})
</script>
