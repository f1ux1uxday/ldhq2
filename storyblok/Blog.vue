<template>
  <div class="blog-post">
    <layout-container layout-width="text">
      <h1>{{ blok.title }}</h1>
    </layout-container>
    <div v-editable="blok">
      <StoryblokComponent
        v-for="block in blok.blocks"
        :key="block._uid"
        :blok="block"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({blok: Object})
</script>

<style scoped>
.blog-post {
  min-height: 100vh;
}
</style>
