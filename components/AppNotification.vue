<template>
  <!-- NOTE: v-snackbarは一定時間の間、popupを表示するcomponent -->
  <v-snackbar
    class="mt-3"
    v-model="snackbar"
    :color="$store.getters['message/getStatus']"
    top
  >
    <div class="text-center">
      <strong>{{ $store.getters['message/getMessage'] }}</strong>
      <v-btn icon>
        <v-icon @click="snackbar = false">mdi-close</v-icon>
      </v-btn>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false
    }
  },
  // NOTE: computedでmessageが存在するか監視
  computed: {
    isShow() {
      return this.$store.getters['message/existsMessage']
    }
  },
  watch: {
    // NOTE: isShowが切り替わったら、メッセージの状態を確認
    isShow: function() {
      this.snackbar = this.$store.getters['message/existsMessage']
    },
    // snackbarがfalseになったらmessageを消す。理由は説明できないけどこの処理は必要。2回目以降が表示できない
    snackbar: function() {
      if (!this.snackbar) {
        this.$store.dispatch('message/removeMessage')
      }
    }
  }
}
</script>
