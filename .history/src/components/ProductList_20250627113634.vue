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
    <BContainer class="product__container">
      <BRow class="mt-5 mb-3">
        <BCol>
          <h2 class="product__header-text">Our Products</h2>
        </BCol>
      </BRow>

      <div v-if="loading" class="product__loading-container">
        <div class="product__loading"></div>
      </div>

      <BRow v-else-if="products.length">
        <BCol md="4" v-for="product in products" :key="product.id" class="mb-4">
          <BCard class="product__card h-100">
            <!-- Card Content Clickable -->
            <div style="cursor: pointer" @click="goToProduct(product.id)">
              <BCardImg :src="product.image" alt="Product" class="product__image" />
              <BCardTitle class="product__title">{{ product.title }}</BCardTitle>
              <BCardText>₦ {{ product.price }}</BCardText>
            </div>

            <!-- Button and Icons section -->
            <div class="product__btn-icon-container">
              <BButton class="product__button" @click="addToCartFromList(product)"
                >Add to cart</BButton
              >

              <div class="product__icons">
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
