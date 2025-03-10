<template>
  <div class="blog-post">
    <layout-container layout-width="text">
      <h1>{{ blok.title }}</h1>
    </layout-container>
    <div v-editable="blok">
      <StoryblokComponent
        v-for="blok in blok.blocks"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: Object,
  story: Object
})
</script>

<style scoped>
.blog-post {
  min-height: 100vh;
}
</style>
