<template>
  <div
    v-editable="blok"
    class="teaser"
  >
    <NuxtImg
      class="teaser-image"
      :src="props.blok.background_image.filename"
    />
    <div
      class="teaser-overlay"
      :class="borderColor"
    >
      <h1 class="teaser-headline">
        {{ props.blok.headline }}
      </h1>
    </div>
  </div>
</template>
 
<script setup>
const props = defineProps({
  blok: Object,
  color: String
})

const borderColor = props.blok.color
  ? props.blok.color
  : props.color
</script>

<style scoped>
.teaser {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.teaser-image {
  width: 100%;
}

.teaser-overlay {
  position: absolute;
  padding: 2rem;
  background-color: transparent;
  border: 3px solid var(--coral);
  border-radius: 0.5rem;
  filter: blur(1px);

  &.sea {
    border-color: var(--sea);
  }
}

.teaser-headline {
  margin: 0;
  color: var(--gray-700);
}
</style>
