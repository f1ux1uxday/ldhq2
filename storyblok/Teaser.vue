<template>
  <div
    v-editable="blok"
    class="teaser"
  >
    <NuxtImg
      class="teaser-image"
      :src="blok.background_image.filename"
    />
    <h1 class="teaser-headline">{{ blok.headline }}</h1>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.teaser {
  position: relative;
  display: flex;
  justify-content: center;
}

.teaser-image {
  width: 100%;
}

.teaser-headline {
  position: absolute;
  top: 50%;
  margin: 0;
  color: var(--gray-700);
}
</style>
