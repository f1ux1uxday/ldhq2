<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const config = useRuntimeConfig();
const story = await useStoryblok(
  'home',
  {
    version: config.public.docVersion
  }
)
</script>
 

<style>

</style>
