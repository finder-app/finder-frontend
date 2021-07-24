<template>
  <v-navigation-drawer permanent app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          ✪finder
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <strong>{{ item.title }}</strong>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <app-btn block @click="signOut()">
          SIGN OUT
        </app-btn>
      </div>
    </template>
  </v-navigation-drawer>
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
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    interface itemInterface {
      title: string
      link: string
      icon: string
    }
    const items = ref<itemInterface[]>([])
    useAsync(async () => {
      // NOTE: storeからaxios.getすると読み込み順番のせいか認証ができない
      try {
        await app.$footPrintRepository.getUnreadCount()
        // NOTE: unreadCountの値が更新された後に値を代入するため
        setItem()
      } catch (err) {
        console.error(err.response)
      }
    })
    // NOTE: ワンライナーはreturnなし、ブロックだとreturnが必要
    const unreadCount = computed((): number => store.getters.getUnreadCount)
    const setItem = () => {
      items.value = [
        { title: 'さがす', link: '/', icon: 'mdi-magnify' },
        {
          title: 'コミュニティ',
          link: '/communities',
          icon: 'mdi-account-group-outline',
        },
        {
          title: 'お相手から',
          link: '/likes',
          icon: 'mdi-thumb-up-outline',
        },
        {
          title: 'メッセージ',
          link: '/messages',
          icon: 'mdi-message-text-outline',
        },
        {
          title: 'プロフィール',
          link: '/profile',
          icon: 'mdi-account-outline',
        },
        // ぶっちゃけ足跡数を表示する必要ないけど、使ったしせっかくだから載せておく
        {
          title: `足跡(${unreadCount.value})`,
          link: '/foot_prints',
          icon: 'mdi-shoe-print',
        },
        {
          title: 'その他',
          link: '/inquiry',
          icon: 'mdi-format-list-bulleted',
        },
      ]
    }
    const signOut = () => {
      store.dispatch('unsetIdToken')
      router.push('/auth/sign-in')
      setTimeout(() => {
        store.dispatch('message/successMessage', {
          message: 'ログアウトしました。',
        })
      }, 100)
    }
    return {
      unreadCount,
      signOut,
      items,
    }
  },
})
</script>
