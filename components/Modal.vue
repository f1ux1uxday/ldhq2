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
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1.5rem;
  border: none;
  border-radius: 50%;
  background-color: var(--gray-800);
  color: var(--coral);
  cursor: pointer;
  z-index: 10;

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
  max-width: 75%;
  padding: 2rem;
  background-color: var(--gray-800);
  border-radius: 0.25rem;
  color: var(--gray-600);
  z-index: 10;
}
</style>
