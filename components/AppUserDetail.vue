<template>
  <v-card width="600">
    <v-card-title>
      <h2 class="font-weight-bold">
        {{ user.uid }}
      </h2>
    </v-card-title>
    <v-card-subtitle>
      <p class="font-weight-regular text--secondary">
        {{ user.email }}
        {{ fullName }}
      </p>
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { User } from '../pb/user_pb'

export default defineComponent({
  props: {
    user: {
      type: Object as Vue.PropType<User.AsObject>,
      required: true,
    },
  },
  setup(props, ctx) {
    const fullName = computed(
      (): string => props.user.lastName + props.user.firstName,
    )
    return {
      fullName,
    }
  },
})
</script>

<style></style>
