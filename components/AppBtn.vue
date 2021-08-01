<template>
  <v-btn
    :color="color"
    :outlined="outlined"
    :rounded="rounded"
    :disabled="disabled"
    :block="block"
    elevation="0"
    max-width="500"
    width="100%"
    height="50"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  }
}
</script>
