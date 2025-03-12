<template>
  <div class="blog-post">
    <layout-container
      class="blog-title-container"
      layout-width="text"
    >
      <h1 class="blog-title">
        {{ blok.title }}
      </h1>
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
  padding-top: 3rem;
}

.blog-title-container {
  display: flex;
  justify-content: center;
}

.blog-title {
  width: fit-content;
  margin: 0 auto 3rem;
  padding: 1rem;
  border: 4px solid var(--coral);
  border-radius: 0.5rem;
  color: var(--sea);

  @media (min-width: 720px) {
    padding: 1rem 2rem;
  }
}
</style>
