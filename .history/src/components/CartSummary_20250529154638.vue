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
    <div v-for="item in cart.cartItems" :key="item.id" class="card p-2">
      <div class="d-flex justify-content-between">
        <!-- Left Side: Product Info -->
        <div class="w-50 pe-2">
          <div class="fw-bold mb-1">{{ item.title }}</div>
          <div class="d-flex align-items-center">
            <img
              :src="item.image"
              alt="product"
              width="40"
              height="40"
              class="me-2"
              style="object-fit: cover; border-radius: 5px"
            />
            <span>₦{{ item.price }}</span>
          </div>
        </div>

        <!-- Right Side: Quantity + Delete Icon -->
        <div class="w-50 ps-2 d-flex align-items-center justify-content-end gap-2">
          <input type="number" v-model="item.quantity" min="1" class="form-control w-50 text-end" />
          <i
            class="bi bi-trash3-fill"
            @click="removeItem(item.id)"
            style="color: #b88e2f; font-size: 1.3rem; cursor: pointer"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
