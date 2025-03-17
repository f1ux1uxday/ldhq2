<template>
  <portal to="modal-portal">
    <transition name="modal">
      <div class="modal-wrapper" v-if="props.showModal">
        <div class="modal-underlayer" @click="$emit('close')" />
        <button
          class="modal-close"
          @click="$emit('close')"
        >
          <i class="pi pi-times"></i>
        </button>
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </transition>
  </portal>
</template>

<script setup>
const emit = defineEmits(['close'])
const props = defineProps({ showModal: Boolean })

const escapeHandler = (event) => {
  if (event.keyCode === 27) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', escapeHandler)
})

onUnmounted(() => {
  window.removeEventListener('keydown', escapeHandler)
})
</script>

<style lang="css" scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  backdrop-filter: blur(4px);
}

.modal-underlayer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgba(33, 33, 33, 0.33);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border: 2px solid var(--gray-200);
  border-radius: 0.25rem;
  background-color: var(--gray-100);
  color: var(--coral);
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
  z-index: 10;

  @media (min-width: 1020px) {
    top: 1.5rem;
    right: 1.5rem;
  }

  &:hover {
    border-color: var(--coral);
  }

  i:before {
    font-size: 1rem;
    font-weight: 800;
  }
}

.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  max-width: 100%;
  color: var(--gray-600);
  z-index: 10;

  @media (min-width: 820px) {
    width: 80%;
    max-width: 80%;
  }
}
</style>
