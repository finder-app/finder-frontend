<template>
  <v-container>
    <h1>足跡一覧</h1>
    <div v-for="footPrint in footPrints" :key="footPrint.visitor.uid">
      <nuxt-link :to="`users/${footPrint.visitor.uid}`">
        <p>id: {{ footPrint.visitor.uid }}</p>
      </nuxt-link>
      <p>{{ footPrint.visitor.email }}</p>
      <p>{{ footPrint.visitor.gender }}</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { FootPrint } from '../../apollo/model/generated'

export default Vue.extend({
  async asyncData(ctx: Context): Promise<any> {
    const footPrints: FootPrint[] = await ctx.app.$footPrintRepository.GetFootPrints()
    return {
      footPrints,
    }
  },
})
</script>
