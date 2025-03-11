<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="block in blok.body"
      :key="block._uid"
      :blok="block"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
