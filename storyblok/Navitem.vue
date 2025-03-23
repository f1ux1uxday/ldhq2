<template>
  <div
    v-editable="blok"
    class="nav-item"
  >
    <NuxtLink
      :to="path"
      class="header-link"
    >
      {{ props.blok.label }}
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const type = props.blok?.link.linktype

const path = type === 'url'
  ? props.blok.link.url
  : `/${props.blok.link.cached_url}`
</script>

<style scoped>
.header-link {
  font-family: "Belanosima";
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--paper);
  border: 2px solid var(--gray-200);
  border-radius: 1rem;
  color: var(--coral);

  @media (min-width: 720px) {
    color: var(--coral);
    padding: 0;
    background-color: transparent;
    border: none;
    border-radius: 0;
  }
}
</style>
