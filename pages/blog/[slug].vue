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

// Can inject a script in here as well - Commento?
useHead({
  title: seoTitle,
  meta: [
    { name: 'description', content: seoTitle }
  ],
})
</script>
