<template>
  <!-- <div>Hello Blog</div> -->
  <StoryblokComponent
    v-if="blocks"
    :story="story"
    :blok="blocks"
  />
</template>

<script setup>
const config = useRuntimeConfig();
const storyblokApi = useStoryblokApi();
const route = useRoute()

const { data } = await storyblokApi.get(
  `cdn/stories/blog/${route.params.slug}`,
  {
    version: config.public.docVersion,
  }
);
const story = data.story
const blocks = story.content
</script>
