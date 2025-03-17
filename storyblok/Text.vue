<template>
  <layout-container
    v-editable="blok"
    class="text-block"
    layout-width="text"
  >
    <StoryblokRichText :doc="blok.content" />
  </layout-container>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.text-block {
  display: flex;
  flex-direction: column;
}

:deep(p img) {
  width: 100%;
  border: 2px solid var(--gray-200);
  border-radius: 0.5rem;
}

:deep(p a) {
  color: var(--sea);
}

:deep(li p) {
  margin: 0.25rem 0;
}
</style>
