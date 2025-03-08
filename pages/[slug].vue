<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const route = useRoute();
const story = await useStoryblok(route.params.slug, {version: 'draft'});

console.log(route.params);
//const body = document?.documentElement;
</script>
