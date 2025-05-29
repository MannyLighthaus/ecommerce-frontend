<script setup>
import { useCartStore } from '@/stores/CartStore'
const cart = useCartStore()

function removeItem(id) {
  cart.removeFromCart(id)
}
</script>
<template>
  <div class="container py-3">
    <!-- Mobile Header -->
    <div class="d-flex justify-content-between px-2 mb-2">
      <strong>Product</strong>
      <strong>Quantity</strong>
    </div>

    <!-- Cart Items -->
    <div v-for="item in cart.cartItems" :key="item.id" class="card mb-3 p-2">
      <div class="d-flex justify-content-between">
        <!-- Left Side: Product Info -->
        <div class="w-50 pe-2">
          <div class="fw-bold mb-1">{{ item.title }}</div>
          <div class="d-flex align-items-center">
            <img :src="item.image" alt="product" width="40" height="40" class="me-2" />
            <span>₦{{ item.price }}</span>
          </div>
        </div>
        <!-- Right Side: Quantity and Remove -->
        <div class="w-50 ps-2 d-flex flex-column justify-content-between align-items-end">
          <input
            type="number"
            v-model="item.quantity"
            min="1"
            class="form-control w-50 mb-2 text-end"
          />
          <button class="btn btn-sm btn-outline-danger" @click="removeItem(item.id)">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
