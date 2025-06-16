<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/product'
import { useCartStore } from '@/stores/CartStore'

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

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SimpleToast from '@/components/SimpleToast.vue'

const router = useRouter()
const store = useProductStore()
const { products, loading } = storeToRefs(store)

const cartStore = useCartStore()
const toastRef = ref(null)

// Add to cart function for list view
function addToCartFromList(product) {
  cartStore.addToCart({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity: 1,
  })
  toastRef.value?.showToast('Product added successfully')
}

function goToProduct(id) {
  router.push({ name: 'product', params: { id } })
}
</script>

<template>
  <SimpleToast ref="toastRef" />

  <section>
    <BContainer class="product-container">
      <BRow class="mt-5 mb-3">
        <BCol>
          <h2 class="product-header-text">Our Products</h2>
        </BCol>
      </BRow>

      <div v-if="loading" class="loading-container">
        <div class="loading"></div>
      </div>

      <BRow v-else-if="products.length">
        <BCol md="4" v-for="product in products" :key="product.id" class="mb-4">
          <BCard class="h-100 product-card">
            <!-- Card Content Clickable -->
            <div class="card-body-hover" style="cursor: pointer" @click="goToProduct(product.id)">
              <BCardImg :src="product.image" alt="Product" class="product-image" />
              <BCardTitle class="truncate-title">{{ product.title }}</BCardTitle>
              <BCardText>₦ {{ product.price }}</BCardText>
            </div>

            <!-- Button and Icons section -->
            <div class="btn-icon-container">
              <!-- Mobile view add to cart -->
              <BButton class="button" @click="addToCartFromList(product)">Add to cart</BButton>

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
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px; /* Adjust based on your section height */
}

.loading {
  border: 6px solid #f9f1e7;
  border-top: 6px solid rgba(184, 142, 47, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.product-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  overflow: hidden; /* prevent child content from spilling out */
}

.product-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* soft shadow */
}

.product-card:hover .card-body-hover {
  background-color: rgba(255, 0, 0, 0.2); /* subtle gold tint */
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
