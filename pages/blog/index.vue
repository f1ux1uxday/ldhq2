<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const config = useRuntimeConfig();
const story = await useStoryblok(
  'blog-landing',
  {
    version: config.public.docVersion
  }
)
</script>
