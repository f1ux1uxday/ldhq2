<template>
  <div
    v-editable="blok"
    class="grid-container"
  >
    <StoryblokComponent
      v-for="blok in blok.columns"
      class="grid-item"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
}
</style>

