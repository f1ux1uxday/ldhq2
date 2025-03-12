<template>
  <button
    v-editable="blok"
    class="feature"
    @click="activateModal"
  >
    <h3 class="feature-text heading-4">
      {{ blok.name }}
    </h3>
    <modal
      :show-modal="showModal"
      @close="closeModal"
    >
      <NuxtImg
        v-if="blok.image"
        class="feature-image"
        :src="blok.image.filename"
      />
      <p class="feature-emoji">
        {{ blok.emoji }}
      </p>
    </modal>
  </button>
</template>

<script setup>
import { useScrollLock } from '@vueuse/core'

const isBodyLocked = useScrollLock(document?.querySelector('body'))
const showModal = ref(false)
defineProps({ blok: Object })

const activateModal = () => {
  showModal.value = true
  isBodyLocked.value = true
}

const closeModal = () => {
  showModal.value = false
  isBodyLocked.value = false
}
</script>

<style scoped lang="css">
.feature {
  display: flex;
  justify-content: center;
  width: 75%;
  padding: 1rem;
  background-color: var(--gray-100);
  box-shadow: 3px 3px 2px var(--gray-300);
  border-radius: 0.25rem;
  border: none;
  transition: all 0.3s ease-out;
  cursor: pointer;

  @media (min-width: 820px) {
    width: 33%;
    padding: 1rem 2rem;
  }

  @media (min-width: 1500px) {
    padding: 2rem 3rem;
  }

  .feature-text {
    color: var(--gray-800);
  }

  &:hover {
    background-color: var(--gray-700);
    box-shadow: 6px 6px 4px var(--gray-300);

    .feature-text {
      color: var(--gray-300);
    }
  }
}

.feature-image {
  width: 100%;
  filter: sepia(0.75);
  border-radius: 1rem;
}

.feature-emoji {
  position: absolute;
  font-size: 3.5rem;
}
</style>
