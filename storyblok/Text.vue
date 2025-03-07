<template>
  <div
    v-editable="blok"
    class="text-block"
  >
    <StoryblokRichText :doc="blok.content" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style lang="css" scoped>
.text-block {
  display: flex;
  flex-direction: column;
  width: var(--text-block-width);
  padding-left: calc((100vw - var(--text-block-width)) / 2);
}
</style>
