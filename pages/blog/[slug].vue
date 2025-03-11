<template>
  <StoryblokComponent
    v-if="blocks"
    :story="story.value"
    :blok="blocks"
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
const blocks = story.value.content

if (story.value.status) {
  throw createError({
    statusCode: story.value.status,
    statusMessage: story.value.response
  });
}
</script>
