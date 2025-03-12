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
  padding-left: var(--mobile-gutter);
  padding-right: var(--mobile-gutter);

  @media (min-width: 1020px) {
    padding-left: var(--tablet-gutter);
    padding-right: var(--tablet-gutter);
  }

  @media (min-width: 1500px) {
    max-width: var(--content-width);
    padding-left: calc((100vw - var(--content-width)) / 2);
    padding-right: calc((100vw - var(--content-width)) / 2);
  }
}

.container-text {
  padding-left: calc(var(--mobile-gutter) * 2);
  padding-right: calc(var(--mobile-gutter) * 2);

  @media (min-width: 800px) {
    max-width: var(--text-block-width);
    padding-left: calc((100vw - var(--text-block-width)) / 2);
    padding-right: calc((100vw - var(--text-block-width)) / 2);
  }
}
</style>
