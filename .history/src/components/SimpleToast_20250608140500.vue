<script setup>
import { ref } from 'vue'

const visible = ref(false)
const message = ref('')

function showToast(msg = 'Added to cart!', duration = 2000) {
  message.value = msg
  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, duration)
}

defineExpose({ showToast })
</script>

<template>
  <div
    v-if="visible"
    class="toast-message position-fixed top-0 start-50 translate-middle-x mt-4 px-4 py-2 text-white bg-success rounded shadow"
  >
    {{ message }}
  </div>
</template>

<style scoped>
.toast-message {
  z-index: 1050;
  transition: opacity 0.3s ease;
}
</style>
