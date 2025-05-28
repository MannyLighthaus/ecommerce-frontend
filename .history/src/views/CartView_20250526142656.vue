<template>
  <div class="container my-5">
    <h2 class="mb-4">Your Cart</h2>

    <!-- Check if cart is empty -->
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>

    <!-- Cart items -->
    <div v-else>
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2"
      >
        <!-- Product Info -->
        <div class="d-flex align-items-center">
          <img :src="item.image" alt="product" width="60" class="me-3" />
          <div>
            <h5 class="mb-1">{{ item.name }}</h5>
            <p class="mb-0">${{ item.price.toFixed(2) }}</p>
          </div>
        </div>

        <!-- Quantity & Remove -->
        <div class="d-flex align-items-center">
          <span class="me-3">Qty: {{ item.quantity }}</span>
          <button class="btn btn-sm btn-outline-danger" @click="removeFromCart(item.id)">
            Remove
          </button>
        </div>
      </div>

      <!-- Totals Section -->
      <div class="mt-4 text-end">
        <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
        <p>Shipping: ${{ shippingFee.toFixed(2) }}</p>
        <h5>Total: ${{ total.toFixed(2) }}</h5>
        <button class="btn btn-primary mt-2">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the cart store
import { useCartStore } from '@/stores/CartStore'
import { storeToRefs } from 'pinia'

// Access store and reactive refs
const cartStore = useCartStore()
const { cartItems, subtotal, shippingFee, total } = storeToRefs(cartStore)
const { removeFromCart } = cartStore
</script>
