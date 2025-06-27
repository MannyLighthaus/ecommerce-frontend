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
    <BContainer class="product__container mt-5">
      <BRow class="mb-5">
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

<style lang="scss" scoped>
.product {
  &__header-text {
    font-size: 24px;
    font-weight: bold;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  &__card {
    border: 1px solid #ddd;
    border-radius: 6px;
    transition:
      border-color 0.3s ease,
      transform 0.3s ease,
      box-shadow 0.3s ease;
    overflow: hidden;

    &:hover {
      border-color: rgba(184, 142, 47, 1);
      transform: scale(1.03);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      background-color: white;
    }
  }

  &__image {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  &__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
  }

  &__button {
    color: #fff;
    background-color: rgba(184, 142, 47, 1);
    padding: 10px;
    font-size: 14px;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    width: 100px;
    cursor: pointer;

    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      background-color: rgba(220, 170, 60, 1);
      color: #000;
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.97);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }
  }

  &__icons {
    display: flex;
    align-items: center;
    gap: 24px;

    i {
      font-size: 22px;
      color: black;
    }
  }

  &__btn-icon-container {
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
      display: none;
    }
  }

  &__loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;

    .product__loading {
      border: 6px solid #f9f1e7;
      border-top: 6px solid rgba(184, 142, 47, 1);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
