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
          />
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
          />
        </ValidationProvider>
        <v-btn :disabled="invalid" @click="onClickUpdate()">
          更新更新更新〜
        </v-btn>
      </ValidationObserver>
    </v-col>

    <v-row class="d-flex">
      <v-col cols="4">
        <label style="font-size: 13px;">サムネイル</label>
        <img
          :src="
            thumbnailSource
              ? thumbnailSource
              : require('~/assets/images/no-img.jpg')
          "
          style="width: 100%;"
          @click="$refs.thumbnailRef.click()"
        />
        <input
          class="d-none"
          type="file"
          @change="setThumbnail($event)"
          ref="thumbnailRef"
        />
      </v-col>
    </v-row>
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
    const thumbnail = ref<File>()
    const thumbnailSource = ref<string>('')
    useAsync(async () => {
      const response = await app.$profileRepository.getProfile()
      user.value = response.data.user
      // debug
      // if (user.value.thumbnail) {
      if (true) {
        thumbnailSource.value =
          'https://pics.prcm.jp/b1acb06ec5cf5/84485684/png/84485684_220x220.png'
      }
    })
    const createRequestFormData = (): FormData => {
      const requestFormData = new FormData()
      // NOTE: ref対策
      if (user.value === undefined) return requestFormData
      // NOTE: emailとgenderなくてもエラー吐かない
      requestFormData.append('uid', user.value.uid)
      requestFormData.append('last_name', user.value.lastName)
      requestFormData.append('first_name', user.value.firstName)
      if (thumbnail.value instanceof File) {
        requestFormData.append('thumbnail', thumbnail.value)
      }
      return requestFormData
    }
    const onClickUpdate = async () => {
      const requestFormData = createRequestFormData()
      try {
        await app.$profileRepository.updateProfile(requestFormData)
        store.dispatch('message/successMessage', {
          message: '更新しました。'
        })
        router.push('/profile')
      } catch (err) {
        console.error(err.response)
      }
    }
    const setThumbnail = (event: Event) => {
      const target = event.target as HTMLInputElement
      const file = target.files![0]
      thumbnail.value = file
      thumbnailSource.value = URL.createObjectURL(file)
    }
    return {
      user,
      onClickUpdate,
      setThumbnail,
      thumbnailSource
    }
  }
})
</script>
