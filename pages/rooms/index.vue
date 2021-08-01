<template>
  <div>
    <template v-for="room in rooms">
      <div :key="room.id">
        <nuxt-link :to="`/rooms/${room.id}`">
          今回のroomは {{ room.id }} だ！
        </nuxt-link>
      </div>
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
import { Room } from '../../pb/room_pb'

const rooms = ref<Room.AsObject[]>([])

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    useAsync(async () => {
      const response = await app.$roomRepository.getRooms()
      rooms.value = response.data.rooms
    })
    return {
      rooms
    }
  }
})
</script>
