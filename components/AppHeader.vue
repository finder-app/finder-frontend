<template>
  <v-app-bar fixed app>
    <nuxt-link to="/">
      <v-toolbar-title v-text="title" />
    </nuxt-link>
    <template v-if="authenticated">
      <v-btn @click="signOut()" color="green ml-5">signOut</v-btn>
    </template>
    <v-spacer />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    const title: string = 'finder'
    return {
      title,
    }
  },
  computed: {
    authenticated(): boolean {
      return this.$store.getters['getIdToken']
    },
  },
  methods: {
    signOut(): void {
      this.$store.dispatch('unsetIdToken')
      this.$router.push('/auth/sign-in')
    },
  },
})
</script>
