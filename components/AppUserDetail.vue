<template>
  <div class="user-detail d-flex">
    <div class="left-card d-flex flex-column mr-5">
      <v-card class="mb-3">
        <nuxt-link :to="`users/${user.uid}`">
          <v-img
            src="https://4.bp.blogspot.com/-bTipX3Vmpts/Wn1ZgUbOHXI/AAAAAAABKM4/b31Jvq8aWssiswuiO19BAJmmAC5WAzXwACLcBGAs/s800/character_boy_normal.png"
          />
        </nuxt-link>
      </v-card>
      <v-card class="pa-7">
        <h2>{{ user.fullName }}</h2>
        <p>{{ 'N' }}歳 東京</p>
        <p class="pt-2">{{ 'ここに一言コメントが入ります' }}</p>
      </v-card>
    </div>
    <div class="right-card">
      <v-card class="pa-10 mb-3">
        <h3 class="pb-3">自己紹介文</h3>
        {{ 'ここに自己紹介文が入る予定です' }}
      </v-card>
      <v-card class="pa-10">
        <h3>プロフィール</h3>
      </v-card>
    </div>
  </div>
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

<style lang="scss" scoped>
.user-detail {
  .v-card {
    border-radius: 10px;
  }
}
.left-card {
  width: 100%;
  max-width: 320px;
}
.right-card {
  width: 100%;
  max-width: 375px;
}
</style>
