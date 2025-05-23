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
  <BContainer fluid class="mt-2 product-details-container">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="breadcrumb-container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item me-2"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/shop">Shop</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product?.title || 'Product' }}
        </li>
      </ol>
    </nav>
    <div v-if="loading" class="text-center loading">
      <!-- <p>Loading product...</p> -->
    </div>
    <ProductDetailsCard v-else-if="product" :product="product" class="product-details" />
    <div v-else class="text-center m-5">
      <p>Product not found.</p>
    </div>
    <hr />
  </BContainer>
</template>

<style scoped>
.product-details-container {
  margin: 0;
  padding: 0;
}

.breadcrumb-container {
  background-color: #f9f1e7;
  padding: 20px;
}
.breadcrumb {
  margin: 0;
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
.product-details {
  margin-inline: 20px;
  margin-block-end: 20%;
}
.loading {
  border: 6px solid #f9f1e7; /* Light grey */
  border-top: 6px solid rgba(184, 142, 47, 1); /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 50%; /* centers it */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 768px) {
  .breadcrumb-container {
    background-color: #f9f1e7;
    padding: 40px;
  }
  .breadcrumb-item {
    a {
      font-size: 16px;
    }
  }
  .breadcrumb-item.active {
    font-size: 16px;
  }
  /* the divider */
  .breadcrumb-item + .breadcrumb-item::before {
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
    font-size: 18px;
  }
}
.breadcrumb-container {
  padding-inline: 50px;
}
</style>
