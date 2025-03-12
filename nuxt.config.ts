// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: 'LDHQ',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-16x16.png' },
      ]
    }
  },
  modules: [
    '@storyblok/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image'
  ],
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    apiOptions: {
      region: 'us'
    },
  },
  runtimeConfig:{
    public: {
      docVersion: process.env.DOC_VERSION
    }
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
})
