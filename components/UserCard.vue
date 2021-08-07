<template>
  <div class="user-card">
    <nuxt-link
      :to="`users/${user.uid}`"
      class="text-decoration-none black--text"
    >
      <v-img
        class="img"
        src="https://4.bp.blogspot.com/-bTipX3Vmpts/Wn1ZgUbOHXI/AAAAAAABKM4/b31Jvq8aWssiswuiO19BAJmmAC5WAzXwACLcBGAs/s800/character_boy_normal.png"
      />
      <p>{{ displayUid() }}</p>
      <p>{{ displayEmail() }}</p>
      <p>{{ user.fullName }}</p>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(props, _) {
    const displayUid = computed(() => (): string =>
      `${props.user.uid.substring(0, 10)}...`
    )
    const displayEmail = computed(() => (): string =>
      `${props.user.email.substring(0, 15)}...`
    )
    return {
      displayUid,
      displayEmail
    }
  }
})
</script>

<style lang="scss" scoped>
.user-card {
  width: 100%;
  max-width: 155px;
}
.img {
  height: 155px;
  border-radius: 50%;
  border: 1px solid lightgray;
}
</style>
