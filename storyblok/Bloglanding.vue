<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="block in blok.blocks"
      :key="block._uid"
      :blok="block"
      :color="blok.color"
    />
  </div>
</template>

<script setup>
defineProps({
  blok: Object,
  color: String
})
</script>
