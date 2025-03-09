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
</script>
