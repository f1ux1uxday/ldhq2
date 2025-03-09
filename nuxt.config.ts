// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@storyblok/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image'
  ],
  storyblok: {
    accessToken: process.env.NUXT_STORYBLOK_ACCESS_TOKEN,
    apiOptions: {
      region: 'us'
    },
  },
  runtimeConfig:{
    public: {
      docVersion: process.env.DOC_VERSION
    }
  }
})
