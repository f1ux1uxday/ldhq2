<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const config = useRuntimeConfig();
const storyblokApi = useStoryblokApi();
const story = await useStoryblok(
  'blog-landing',
  {
    version: config.public.docVersion
  }
)

const data = await storyblokApi.getAll(
  `cdn/stories`,
  {
    version: 'draft',
    content_type: 'blog'
  }
)

console.log(data);
</script>
