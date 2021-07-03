<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <v-container>
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
