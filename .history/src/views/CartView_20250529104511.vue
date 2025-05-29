<template>
  <div class="container mt-4">
    <h2>Your Cart</h2>
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="card mb-3">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5>{{ item.title }}</h5>
            <p>₦{{ item.price }} x {{ item.quantity }}</p>
          </div>
          <div>
            <button @click="decrease(item.id)" class="btn btn-secondary btn-sm">-</button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button @click="increase(item.id)" class="btn btn-secondary btn-sm">+</button>
            <button @click="remove(item.id)" class="btn btn-danger btn-sm ms-3">Remove</button>
          </div>
        </div>
      </div>

      <hr />
      <h5>Subtotal: ₦{{ subtotal }}</h5>
      <h6>Shipping: ₦{{ shippingFee }}</h6>
      <h4>Total: ₦{{ total }}</h4>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items)
const subtotal = computed(() => cartStore.subtotal)
const shippingFee = computed(() => cartStore.shippingFee)
const total = computed(() => cartStore.total)

function increase(id) {
  cartStore.increaseQuantity(id)
}

function decrease(id) {
  cartStore.decreaseQuantity(id)
}

function remove(id) {
  cartStore.removeFromCart(id)
}
</script>
