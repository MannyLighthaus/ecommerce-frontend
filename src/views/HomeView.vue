<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/product'
import { BContainer, BRow, BCol, BCard, BCardImg, BCardTitle, BCardText } from 'bootstrap-vue-next'
import HeroBanner from '@/components/HeroBanner.vue'

// Use Pinia store
const store = useProductStore()
const { products, loading } = storeToRefs(store)

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
        <BCol class="d-flex flex-column text-center my-4">
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
  <section>
    <BContainer class="">
      <BRow class="text-center mt-5 mb-2">
        <BCol>
          <h2>Our Products</h2>
        </BCol>
      </BRow>

      <!-- Loading state -->
      <div v-if="loading" class="text-center">
        <p>Loading products...</p>
      </div>

      <!-- Products -->
      <BRow v-else-if="products.length">
        <BCol md="4" v-for="product in products" :key="product.id" class="mb-4 text-center">
          <BCard class="h-100">
            <BCardImg :src="product.image" alt="Product" class="product-image" />
            <BCardTitle class="truncate-title"> {{ product.title }}</BCardTitle>
            <BCardText>₦ {{ product.price }}</BCardText>
          </BCard>
        </BCol>
      </BRow>
      <!-- No products -->
      <div v-else class="text-center">
        <p>No products available.</p>
      </div>
    </BContainer>
  </section>
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
