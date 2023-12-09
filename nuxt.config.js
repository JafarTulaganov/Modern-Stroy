export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ModernCity',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/main.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'vue-toastification/nuxt',
  ],

  axios: {
    baseURL: 'https://admin.moderncityconstruct.uz/api',
  },

  i18n: {
    locales: ['ru', 'uz'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
    },
  },

  ssr: true,

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]
    },
  },
}
