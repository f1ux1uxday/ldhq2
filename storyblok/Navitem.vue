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
const props = defineProps({ blok: Object });
const type = props.blok?.link.linktype;

const path = type === 'url'
  ? props.blok.link.url
  : `/${props.blok.link.cached_url}`
</script>

<style scoped>
.header-link {
  font-family: "Belanosima";
  font-size: 1rem;
}
</style>
