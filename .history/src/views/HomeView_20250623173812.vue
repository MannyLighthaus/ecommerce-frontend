<script setup>
import { onMounted } from 'vue'

import { useProductStore } from '../stores/product'
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import HeroBanner from '@/components/HeroBanner.vue'
import ProductList from '@/components/ProductList.vue'
import FooterSection from '@/components/FooterSection.vue'

// Use Pinia store
const store = useProductStore()

// Fetch products
onMounted(() => {
  store.fetchProducts()
})
</script>

<template>
  <!-- Hero section -->
  <HeroBanner />

  <!-- Range section -->

  <section>
    <BContainer>
      <BRow>
        <BCol class="d-flex flex-column text-center my-5">
          <h2 class="range-header">Browse The Range</h2>
          <p class="range-text">Explore our handpicked selections made just for you.</p>
        </BCol>
      </BRow>

      <BRow class="text-center g-2">
        <BCol cols="12" md="4">
          <div class="image-wrapper">
            <img
              src="@/assets/ring.jpg
            "
              alt="dining"
              class="img-fluid"
            />
          </div>

          <p class="text">Dining</p>
        </BCol>
        <BCol cols="12" md="4">
          <div class="image-wrapper">
            <img src="@/assets/ring1.jpg" alt="living-room" class="img-fluid" />
          </div>
          <p class="text">Living</p>
        </BCol>
        <BCol cols="12" md="4">
          <div class="image-wrapper">
            <img src="@/assets/bedroom.png" alt="bedroom" class="img-fluid" />
          </div>

          <p class="text">Bedroom</p>
        </BCol>
      </BRow>
    </BContainer>
  </section>

  <!-- Product listings -->
  <ProductList />

  <!-- footer -->
  <FooterSection />
</template>

<style scoped>
.range-header {
  font-size: 24px;
  font-weight: bold;
}
.text {
  font-size: 18px;
  margin-block-start: 10px;
  margin-block-end: 20px;
  font-weight: bold;
}

/* Add hover effect on images */
.image-wrapper img.img-fluid {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.image-wrapper img.img-fluid:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.image-wrapper {
  overflow: hidden;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .range-header {
    font-size: 32px;
  }

  .range-text {
    font-size: 20px;
  }
  .text {
    font-size: 24px;
  }
}
</style>
