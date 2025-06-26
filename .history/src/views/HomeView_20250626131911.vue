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
          <h2 class="home-view__range-header">Browse The Range</h2>
          <p class="home-view__range-text">Explore our handpicked selections made just for you.</p>
        </BCol>
      </BRow>

      <BRow class="text-center g-2">
        <BCol cols="12" md="4">
          <div class="home-view__image-wrapper">
            <img
              src="@/assets/ring.jpg
            "
              alt="dining"
              class="img-fluid"
            />
          </div>

          <p class="home-view__text">Jewelry</p>
        </BCol>
        <BCol cols="12" md="4">
          <div class="home-view__image-wrapper">
            <img src="@/assets/cloth.jpg" alt="living-room" class="img-fluid" />
          </div>
          <p class="home-view__text">Women's Clothing</p>
        </BCol>
        <BCol cols="12" md="4">
          <div class="home-view__image-wrapper">
            <img src="@/assets/jeans.jpg" alt="bedroom" class="img-fluid" />
          </div>

          <p class="home-view__text">Men's Clothing</p>
        </BCol>
      </BRow>
    </BContainer>
  </section>

  <!-- Product listings -->
  <ProductList />

  <!-- footer -->
  <FooterSection />
</template>

<style scoped lang="scss">
.home-view__range-header {
  font-size: 24px;
  font-weight: bold;
}
.home-view__text {
  font-size: 18px;
  margin-block-start: 10px;
  margin-block-end: 20px;
  font-weight: bold;
}

/* Add hover effect on images */
.home-view__image-wrapper img.img-fluid {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.home-view__image-wrapper img.img-fluid:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.home-view__image-wrapper {
  overflow: hidden;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .home-view__range-header {
    font-size: 32px;
  }

  .home-view__range-text {
    font-size: 20px;
  }
  .home-view__text {
    font-size: 24px;
  }
}
</style>
