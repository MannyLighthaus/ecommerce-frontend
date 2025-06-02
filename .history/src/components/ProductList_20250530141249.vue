<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/product'
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardImg,
  BCardTitle,
  BCardText,
  BButton,
} from 'bootstrap-vue-next'

// Use Pinia store
const store = useProductStore()
const { products, loading } = storeToRefs(store)

// use router
import { useRouter } from 'vue-router'
const router = useRouter()

function goToProduct(id) {
  router.push({ name: 'product', params: { id } })
}
</script>

<template>
  <!-- Product listings -->
  <section>
    <BContainer class="product-container">
      <BRow class="mt-5 mb-3">
        <BCol>
          <h2 class="product-header-text">Our Products</h2>
        </BCol>
      </BRow>

      <!-- Loading state -->
      <div v-if="loading" class="text-center">
        <p>Loading products...</p>
      </div>

      <!-- Products -->
      <BRow v-else-if="products.length">
        <BCol md="4" v-for="product in products" :key="product.id" class="mb-4">
          <BCard class="h-100" style="cursor: pointer" @click="goToProduct(product.id)">
            <BCardImg :src="product.image" alt="Product" class="product-image" />
            <BCardTitle class="truncate-title"> {{ product.title }}</BCardTitle>
            <BCardText>₦ {{ product.price }}</BCardText>
            <div class="btn-icon-container">
              <!-- mobile view -->

              <BButton class="button">Add to cart</BButton>
              <!-- icons -->
              <div class="nav-icons">
                <i class="bi bi-arrow-left-right"></i>
                <i class="bi bi-share"></i>
                <i class="bi bi-heart"></i>
              </div>
            </div>
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
  margin-bottom: 20px;
}

.truncate-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
}
.product-header-text {
  font-size: 24px;
  font-weight: bold;
  margin-block-end: 30px;
  text-align: center;
}
.button {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(184, 142, 47, 1);
  /* padding: 10px; */
  font-size: 14px;

  cursor: pointer;
  border-color: none;
  border-radius: 0%;
  width: 140px;
  height: 45px;
}
.nav-icons {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-icons i {
  font-size: 22px;
  color: black;
}
.btn-icon-container {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .product-header-text {
    font-size: 40px;
  }
  .btn-icon-container {
    display: none;
  }
  .product-container {
    margin-bottom: 10%;
  }
}
</style>
