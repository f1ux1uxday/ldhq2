<template>
  <main>
    <site-header />
    <slot />
    <portal-target
      name="modal-portal"
      multiple
    />
    <site-footer />
  </main>
</template>

<script setup>
</script>

<style scoped>
main {
  overflow-y: unset;
}
</style>
