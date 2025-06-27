<script setup>
import { ref } from 'vue'

const visible = ref(false)
const message = ref('')

function showToast(msg, duration = 2000) {
  message.value = msg
  visible.value = true
  setTimeout(() => {
    visible.value = false
  }, duration)
}

defineExpose({ showToast })
</script>

<template>
  <div v-if="visible" class="toast__message">
    {{ message }}
  </div>
</template>

<style scoped lang="scss">
.toast {
  &__message {
    position: fixed;
    top: 1rem;
    left: 50%;
    z-index: 9999; /* ensures it's above everything */
    transform: translateX(-50%);
    padding-block: 5px;
    padding-inline: 10px;
    background-color: #198754;
    color: white;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .toast__message {
      font-size: 20px;
      top: 2rem;
    }
  }
}
</style>
