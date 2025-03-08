<template>
  <div :class="`container-${layoutWidth}`">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  layoutWidth: {
    type: String,
    default: 'content',
    validator(value) {
      return ['content', 'text'].includes(value)
    }
  }
})
</script>

<style scoped>
.container-content {
  width: var(--content-width);
  padding-left: calc((100vw - var(--content-width)) / 2);
  padding-right: calc((100vw - var(--content-width)) / 2);
}

.container-text {
  width: var(--text-block-width);
  padding-left: calc((100vw - var(--text-block-width)) / 2);
  padding-right: calc((100vw - var(--text-block-width)) / 2);
}
</style>
