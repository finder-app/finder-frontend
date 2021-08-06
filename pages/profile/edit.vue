<template>
  <v-row v-if="user" justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="名前（性）"
        >
          <v-text-field
            v-model="user.lastName"
            label="名前（性）"
            :error-messages="errors"
            outlined
          >
          </v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="名前（名）"
        >
          <v-text-field
            v-model="user.firstName"
            label="名前（名）"
            :error-messages="errors"
            outlined
          >
          </v-text-field>
        </ValidationProvider>
        <v-btn :disabled="invalid" @click="onClickUpdate()"
          >更新更新更新〜</v-btn
        >
      </ValidationObserver>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  ref,
  useRoute,
  useStore,
  computed,
  useRouter
} from '@nuxtjs/composition-api'
import { User } from '../../finder-protocol-buffers/ts/user_pb'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const user = ref<User.AsObject>()
    useAsync(async () => {
      const response = await app.$profileRepository.getProfile()
      user.value = response.data.user
    })
    const onClickUpdate = async () => {
      try {
        await app.$profileRepository.updateProfile(user.value)
        store.dispatch('message/successMessage', {
          message: '更新しました。'
        })
        router.push('/profile')
      } catch (err) {
        console.error(err.response)
      }
    }
    return {
      user,
      onClickUpdate
    }
  }
})
</script>
