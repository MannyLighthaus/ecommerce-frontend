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
  <BContainer>
    <BRow>
      <BCol class="d-flex flex-column text-center my-5">
        <h2 class="range-header">Browse The Range</h2>
        <p class="range-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </BCol>
    </BRow>

    <BRow class="text-center justify-content-center g-4 px-3 px-md-5">
      <BCol
        v-for="(range, index) in ranges"
        :key="index"
        cols="12"
        md="4"
        class="range-item d-flex flex-column align-items-center"
      >
        <div class="range-image-wrapper">
          <img :src="range.image" :alt="range.label" class="img-fluid" />
        </div>
        <p class="range-label mt-3">{{ range.label }}</p>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.range-header {
  font-size: 24px;
  font-weight: bold;
}

.range-text {
  font-size: 16px;
  color: #555;
}

.range-label {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
.range-image-wrapper {
  /* max-width: 250px;
  width: 100%; */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border-radius: 10px;
  overflow: hidden;
}

.range-image-wrapper:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .range-header {
    font-size: 32px;
  }

  .range-text {
    font-size: 20px;
  }

  .range-label {
    font-size: 24px;
  }
}
</style>
