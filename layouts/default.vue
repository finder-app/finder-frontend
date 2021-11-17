<template>
  <v-app>
    <app-notification></app-notification>
    <v-main>
      <v-container>
        <side-bar />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
// NOTE: /pages/auth/sign-upでAPIを叩くため、UserRepositoryをprovideする
import { defineComponent, useContext, provide } from '@nuxtjs/composition-api'
import {
  UserRepositoryInterface,
  UserRepositoryClient,
  UserRepository
} from '../repository/user'

export default defineComponent({
  middleware: 'authenticated',
  setup() {
    const { app } = useContext()
    const userRepository = new UserRepository(app.$axios)
    provide<UserRepositoryInterface>(UserRepositoryClient, userRepository)
  }
})
</script>
