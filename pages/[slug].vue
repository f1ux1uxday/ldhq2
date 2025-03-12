<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute()
const story = await useStoryblok(
  route.params.slug,
  {
    version: config.public.docVersion
  }
)

// Add page title to type
// Pull in site name from 'Settings' equivalent?
useHead({
  title: `${route.params.slug} - LDHQ`,
  meta: [
    { name: 'description', content: `${route.params.slug} - LDHQ` }
  ],
})
</script>
