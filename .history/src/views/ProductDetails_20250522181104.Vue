<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import { storeToRefs } from 'pinia'
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardImg,
  BCardTitle,
  BCardText,
  BButton,
  BBreadcrumb,
  BBreadcrumbItem,
} from 'bootstrap-vue-next'
import NavBar from '../components/NavBar.vue' // Adjust path if needed

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
  <div>
    <NavBar />
    <BContainer class="mt-4">
      <BBreadcrumb>
        <BBreadcrumbItem to="/">Home</BBreadcrumbItem>
        <BBreadcrumbItem @click="goToShop">Shop</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ product?.title || 'Product' }}</BBreadcrumbItem>
      </BBreadcrumb>

      <div v-if="loading" class="text-center">
        <p>Loading product...</p>
      </div>
      <BRow v-else-if="product" class="my-5">
        <BCol md="6">
          <BCardImg
            :src="product.image"
            alt="Product"
            style="max-height: 400px; object-fit: contain"
          />
        </BCol>
        <BCol md="6">
          <BCard>
            <BCardTitle>{{ product.title }}</BCardTitle>
            <BCardText>
              <p><strong>Price:</strong> ₦ {{ product.price }}</p>
              <p><strong>Description:</strong> {{ product.description }}</p>
              <p><strong>Category:</strong> {{ product.category }}</p>
              <p>
                <strong>Rating:</strong> {{ product.rating.rate }} ({{
                  product.rating.count
                }}
                reviews)
              </p>
            </BCardText>
            <BButton class="button">Add to cart</BButton>
          </BCard>
        </BCol>
      </BRow>
      <div v-else class="text-center">
        <p>Product not found.</p>
      </div>
    </BContainer>
  </div>
</template>

<style scoped>
.button {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(184, 142, 47, 1);
  font-size: 14px;
  cursor: pointer;
  border-color: none;
  border-radius: 0%;
  width: 140px;
  height: 45px;
}
</style>
