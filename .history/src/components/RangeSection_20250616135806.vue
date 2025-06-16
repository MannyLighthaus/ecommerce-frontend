<script setup>
const ranges = [
  {
    label: 'Dining',
    image: new URL('@/assets/dining.png', import.meta.url).href,
  },
  {
    label: 'Living',
    image: new URL('@/assets/living room.png', import.meta.url).href,
  },
  {
    label: 'Bedroom',
    image: new URL('@/assets/bedroom.png', import.meta.url).href,
  },
]
</script>
<template>
  <BRow class="text-center g-2 px-5">
    <BCol v-for="(range, index) in ranges" :key="index" cols="12" md="4" class="range-item">
      <img :src="range.image" :alt="range.label" class="img-fluid" />
      <p class="range-label">{{ range.label }}</p>
    </BCol>
  </BRow>
</template>
<style scoped></style>
