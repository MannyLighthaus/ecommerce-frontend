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
    <BBreadcrumb>
      <BBreadcrumbItem to="/">Home</BBreadcrumbItem>
      <BBreadcrumbItem @click="goToShop">Shop</BBreadcrumbItem>
      <BBreadcrumbItem active>{{ product?.title || 'Product' }}</BBreadcrumbItem>
    </BBreadcrumb>

    <div v-if="loading" class="text-center">
      <p>Loading product...</p>
    </div>
    <ProductDetailsCard v-else-if="product" :product="product" />
    <div v-else class="text-center">
      <p>Product not found.</p>
    </div>
  </BContainer>
</template>
