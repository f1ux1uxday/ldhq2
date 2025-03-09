<template>
  <div v-if="advice" class="advice">
    <layout-container
      class="advice-container"
    >
      <h3 class="advice-content heading-3">
        {{ advice }}
      </h3>
    </layout-container>
  </div>
</template>

<script setup>
const response = await useFetch('https://api.adviceslip.com/advice')
const advice = JSON.parse(response.data._value).slip.advice
</script>

<style scoped>
.advice {
  padding: 3rem 0;
}

.advice-container {
  display: flex;
  justify-content: center;
}

.advice-content {
  padding: 1.5rem 3rem;
  border: 3px solid var(--coral);
  border-radius: 4px;
}
</style>
