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
        {{ user.fullName }}
      </p>
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style></style>
