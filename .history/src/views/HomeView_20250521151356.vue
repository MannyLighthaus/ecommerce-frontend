<script setup>
import { onMounted } from 'vue'

import { useProductStore } from '../stores/product'
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import HeroBanner from '@/components/HeroBanner.vue'
import ProductList from '@/components/ProductList.vue'

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

  <!-- Category section -->
  <section>
    <BContainer fluid>
      <BRow>
        <BCol class="d-flex flex-column text-center my-5">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </BCol>
      </BRow>
      <BRow class="text-center g-2 px-5">
        <BCol cols="12" md="4">
          <img src="@/assets/dining.png" alt="dining" class="img-fluid" />
          <p>Dining</p>
        </BCol>
        <BCol cols="12" md="4">
          <img src="@/assets/living room.png" alt="living-room" class="img-fluid" />
          <p>Living</p>
        </BCol>
        <BCol cols="12" md="4">
          <img src="@/assets/bedroom.png" alt="bedroom" class="img-fluid" />
          <p>Bedroom</p>
        </BCol>
      </BRow>
    </BContainer>
  </section>

  <!-- Product listings -->
  <ProductList />
</template>

<style scoped>
.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.truncate-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* max-width: 300px; */
}
</style>
