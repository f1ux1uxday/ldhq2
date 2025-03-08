<template>
  <div
    class="nav-item"
  >
    <NuxtLink
    :to="`/${link.full_slug}`"
      class="header-link"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ link: Object });
</script>

<style scoped>
.header-link {
  font-family: "Belanosima";
  font-size: 1rem;
}
</style>
