<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const story = await useStoryblok('home', {version: 'draft'});
const body = document?.documentElement;
</script>
 

<style>

</style>
