<template>
  <v-app>
    <app-notification></app-notification>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, useContext, provide } from '@nuxtjs/composition-api'
import {
  UserRepositoryInterface,
  UserRepositoryClient,
  UserRepository
} from '../repository/user'

export default defineComponent({
  name: 'auth',
  setup() {
    const { app } = useContext()
    const userRepository = new UserRepository(app.$axios)
    provide<UserRepositoryInterface>(UserRepositoryClient, userRepository)
  }
})
</script>
