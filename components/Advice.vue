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
  padding: 2rem 0;

  @media (min-width: 720px) {
    padding: 3rem 0;
  }
}

.advice-container {
  display: flex;
  justify-content: center;
}

.advice-content {
  padding: 1rem 1.5rem;
  border: 3px solid var(--coral);
  border-radius: 0.5rem;
  font-size: 1.25rem;

  @media (min-width: 720px) {
    padding: 1.5rem 3rem;
    font-size: 2rem;
  }
}
</style>
