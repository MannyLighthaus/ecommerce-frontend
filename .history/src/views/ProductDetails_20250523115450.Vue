<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import { storeToRefs } from 'pinia'
import { BContainer, BBreadcrumb, BBreadcrumbItem } from 'bootstrap-vue-next'
import ProductDetailsCard from '../components/ProductDetailsCard.vue'

const route = useRoute()
const router = useRouter()
const store = useProductStore()
const { product, loading } = storeToRefs(store)

onMounted(() => {
  store.fetchProductById(route.params.id)
})

function goToShop() {
  router.push({ name: 'shop' })
}
</script>

<template>
  <BContainer class="mt-4 product-details-container">
    <!-- <!-- <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="breadcrumb-container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/shop">Shop</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product?.title || 'Product' }}
        </li>
      </ol>
    </nav> -->
    <div v-if="loading" class="text-center">
      <p>Loading product...</p>
    </div>
    <ProductDetailsCard v-else-if="product" :product="product" />
    <div v-else class="text-center">
      <p>Product not found.</p>
    </div>
    -->
  </BContainer>
</template>

<style scoped>
.product-details-container {
  margin: 0;
  padding: 0;
}

.breadcrumb-container {
  background-color: #f9f1e7;
  width: 100%;
  padding: 20px;
}

.breadcrumb-item {
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
    font-size: 14px;
  }
}

.breadcrumb-item.active {
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 1);
}

/* the divider */
.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  font-size: 16px;
}
</style>
