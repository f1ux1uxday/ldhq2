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
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Belanosima:wght@400;600;700&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,100,1;1,9..144,100..900,100,1&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon-16x16.png'
        },
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
    usePlugin: true,
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
