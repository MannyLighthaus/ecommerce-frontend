<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/product'
import { BContainer, BRow, BCol, BCard, BCardImg, BCardTitle, BCardText } from 'bootstrap-vue-next'

// Use Pinia store
const store = useProductStore()
const { products, loading } = storeToRefs(store)
</script>

<template>
  <!-- Product listings -->
  <section>
    <BContainer class="">
      <BRow class="text-center mt-5 mb-2">
        <BCol>
          <h2 class="product-header">Our Products</h2>
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
}
</style>
