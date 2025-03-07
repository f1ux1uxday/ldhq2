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
    accessToken: '1qEFowQCdaW2V0L6Qe4doAtt',
    apiOptions: {
      region: 'us'
    },
  }
})
