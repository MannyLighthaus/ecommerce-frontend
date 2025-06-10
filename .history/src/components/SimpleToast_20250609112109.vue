<script setup>
import { ref } from 'vue'

const visible = ref(false)
const message = ref('')

function showToast(msg, duration = 50000) {
  message.value = msg
  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, duration)
}

defineExpose({ showToast })
</script>

<template>
  <div v-if="visible" class="toast-message">
    {{ message }}
  </div>
</template>

<style scoped>
.toast-message {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding-block: 5px;
  padding-inline: 10px;
  background-color: #198754;
  color: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1050;
  transition: opacity 0.3s ease;
  font-size: 14px;
  max-width: 90%;
  text-align: center;
  word-wrap: break-word; /* Wrap long words */
  white-space: normal;
}

@media (min-width: 768px) {
  .toast-message {
    font-size: 16px;
    padding: 0.75rem 2rem;
    top: 2rem;
  }
}
</style>
