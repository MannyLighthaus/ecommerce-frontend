<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/product'
import { storeToRefs } from 'pinia'
import { BContainer } from 'bootstrap-vue-next'
import ProductDetailsCard from '../components/ProductDetailsCard.vue'
import FooterSection from '@/components/FooterSection.vue'

const route = useRoute()

const store = useProductStore()
const { product, loading } = storeToRefs(store)

onMounted(() => {
  store.fetchProductById(route.params.id)
})
</script>

<template>
  <BContainer class="mt-2">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="breadcrumb-container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/shop">Shop</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product?.title || 'Product' }}
        </li>
      </ol>
    </nav>
  </BContainer>

  <!-- loading state -->
  <BContainer>
    <div v-if="loading" class="loading-container">
      <div class="loading"></div>
    </div>

    <ProductDetailsCard v-else-if="product" :product="product" class="product-details" />
    <div v-else class="text-center m-5">
      <p>Product not found.</p>
    </div>
  </BContainer>
  <FooterSection />
</template>

<style scoped>
.breadcrumb-container {
  background-color: #f9f1e7;
  padding: 20px;
}
/* .breadcrumb {
  margin: 0;
} */
/* .breadcrumb-item {
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
    font-size: 14px;
  }
} */

/* .breadcrumb-item.active {
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
} */

/* the divider */
/* .breadcrumb-item + .breadcrumb-item::before {
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  font-size: 16px;
  float: unset;
} */
/* .product-details {
  margin-inline: 20px;
  margin-block-end: 20%;
} */

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px; /* Adjust based on your section height */
}

/* .loading {
  border: 6px solid #f9f1e7;
  border-top: 6px solid rgba(184, 142, 47, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
} */

/* @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} */

@media (min-width: 768px) {
  /* .breadcrumb-container {
    padding: 40px;
  } */
  /* .breadcrumb-item {
    a {
      font-size: 16px;
    }
  } */
  /* .breadcrumb-item.active {
    font-size: 16px;
    max-width: 500px;
  } */
  /* .breadcrumb-item + .breadcrumb-item::before {
    font-size: 18px;
    margin-right: 10px;
  } */

  /* .breadcrumb {
    margin: 0;
    display: flex;
    gap: 30px;
  } */
}

@media (min-width: 1024px) {
  /* .breadcrumb-container {
    padding: 40px;
  } */
  /* .breadcrumb-item {
    a {
      font-size: 16px;
    }
  } */
  /* .breadcrumb-item.active {
    font-size: 16px;
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
    max-width: 100%;
  } */
  /* the divider */
  /* .breadcrumb-item + .breadcrumb-item::before {
    font-size: 18px;
    margin-right: 10px;
  } */

  /* .breadcrumb {
    margin: 0;
    display: flex;
    gap: 30px;
  } */
}
</style>
