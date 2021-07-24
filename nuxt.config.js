import colors from 'vuetify/es5/util/colors'

let backendEndpoint = 'http://localhost:8081'

if (process.env.NODE_ENV === 'production') {
  backendEndpoint = 'https://hogehoge.com'
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - frontend',
    title: 'finder-frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/common'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/nuxt-client-init',
    '~/plugins/axios',
    '~/plugins/firebase',
    '~/plugins/repository',
    '~/plugins/vee-validate',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://composition-api.nuxtjs.org/
    // '@nuxtjs/composition-api',
    '@nuxtjs/composition-api/module',
  ],

  // NOTE: nuxt compotision APIのdocumentで書くことを推奨していたため
  generate: {
    // choose to suit your project
    interval: 2000,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/apollo'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    BACKEND_ENDPOINT: backendEndpoint,
    firebaseApiKey: process.env.firebaseApiKey,
    firebaseAuthDomain: process.env.firebaseAuthDomain,
    firebaseDatabaseURL: process.env.firebaseDatabaseURL,
    firebaseProjectId: process.env.firebaseProjectId,
    firebaseStorageBucket: process.env.firebaseStorageBucket,
    firebaseMessagingSenderId: process.env.firebaseMessagingSenderId,
    firebaseAppId: process.env.firebaseAppId,
  },

  axios: {
    baseURL: `${backendEndpoint}`,
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.ts',
    },
  },

  // NOTE: eslintをファイル保存時に実行させようとしたけどlayout/defaultでエラー吐くので保留
  // typescript: {
  //   typeCheck: {
  //     eslint: {
  //       files: './**/*.{ts,js,vue}'
  //     }
  //   }
  // }
}
