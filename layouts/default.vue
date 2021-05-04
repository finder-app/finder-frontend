<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <template v-if="authenticated">
        <v-btn @click="signOut()" color="green ml-5">signOut</v-btn>
      </template>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data () {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      title: 'finder'
    }
  },
  computed: {
    authenticated() {
      return this.$store.getters['getIdToken']
    }
  },
  methods: {
    async signOut() {
      try {
        await firebase.auth().signOut()
        this.$store.dispatch('unsetIdToken')
        this.$router.push('/auth/sign_in')
      } catch(err) {
        console.err(err)
      }
    }
  }
}
</script>
