<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute()
// const storyblokApi = useStoryblokApi()
const story = await useStoryblok(
  route.params.slug,
  {
    version: config.public.docVersion
  }
)

const { labels, getLabel } = useLabels()
console.log('lv: ', labels?.datasource_entries);
// const seoTitle = `${route.params.slug} - ${getLabel('siteName')}`
const seoTitle = `${route.params.slug} - LDHQ`

// Add page title to type
// Pull in site name from 'Settings' equivalent?
useHead({
  title: seoTitle,
  meta: [
    {
      name: 'description',
      content: seoTitle
    }
  ],
})
</script>
