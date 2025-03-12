<template>
  <layout-container
    v-editable="blok"
    class="grid-container"
  >
    <StoryblokComponent
      v-for="blok in blok.columns"
      class="grid-item"
      :key="blok._uid"
      :blok="blok"
    />
  </layout-container>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 820px) {
    flex-direction: row;
    gap: 2rem;
  }
}
</style>

