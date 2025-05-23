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
  <BContainer class="mt-4">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="breadcrumb-container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/shop">Shop</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product?.title || 'Product' }}
        </li>
      </ol>
    </nav>
    <div v-if="loading" class="text-center">
      <p>Loading product...</p>
    </div>
    <ProductDetailsCard v-else-if="product" :product="product" />
    <div v-else class="text-center">
      <p>Product not found.</p>
    </div>
  </BContainer>
</template>

<style scoped>
.breadcrumb-container {
  background-color: #f9f1e7;
  width: 100%;
  /* padding: 30px; */
}
</style>
