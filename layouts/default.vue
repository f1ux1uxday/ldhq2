<template>
  <main>
    <Header />
    <slot />
    <portal-target
      name="modal-portal"
      multiple
    />
  </main>
</template>

<script setup>
</script>

<style scoped>
main {
  overflow-y: unset;
}
</style>
