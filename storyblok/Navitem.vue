<template>
  <div
    v-editable="blok"
    class="nav-item"
  >
    <NuxtLink
    :to="`/${blok.link.cached_url}`"
      class="header-link"
    >
      {{ blok.label }}
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
.header-link {
  font-family: "Belanosima";
  font-size: 1rem;
}
</style>
