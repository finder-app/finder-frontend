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

<script>
export default {
  middleware: 'authenticated',
}
</script>
