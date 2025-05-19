<script setup lang="ts">
import ProductList from '@/components/ProductList.vue'
import { BContainer } from 'bootstrap-vue-next'
</script>

<template>
  <div class="shop-header">
    <img src="@/assets/shop.jpg" alt="" class="img-fluid shop-image" />
    <h2 class="shop-text text-center">Shop</h2>

    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Shop</li>
      </ol>
    </nav>
  </div>
  <ProductList />
</template>

<style scoped>
.shop-header {
  position: relative;
  text-align: center;
}

.shop-image {
  opacity: 50%;
  height: 316px;
  width: 100vw;
  object-fit: cover;
}

.shop-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  margin: 0;
  font-size: 3rem;
}

.breadcrumb {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
