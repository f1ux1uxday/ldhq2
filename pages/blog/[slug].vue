<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
  />
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute()
const story = await useAsyncStoryblok(
  `blog/${route.params.slug}`,
  {
    version: config.public.docVersion
  }
)

const { getLabel } = await useLabels()
const seoTitle = `${story.value.content.title} - ${getLabel('siteName')}`

useHead({
  title: seoTitle,
  meta: [
    { name: 'description', content: seoTitle }
  ],
  script: [
    {
      src: 'https://cdn.commento.io/js/commento.js',
      defer: true,
      'data-no-fonts': true,
      'data-css-override': 'https://ld-hq.com/ldhq-commento.css'
    }
  ]
})
</script>
