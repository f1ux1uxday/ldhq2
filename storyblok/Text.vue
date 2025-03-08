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

<style lang="css" scoped>
.text-block {
  display: flex;
  flex-direction: column;
}
</style>
