<template>
  <div class="cart-summary-container p-4 bg-white">
    <table class="table align-middle text-center table-responsive">
      <thead class="table-head">
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.cartItems" :key="item.id">
          <td class="d-flex align-items-center gap-2 justify-content-center">
            <img
              :src="item.image"
              alt="Product"
              width="40"
              height="40"
              style="object-fit: cover"
              class="rounded"
            />
            <span>{{ item.title }}</span>
          </td>
          <td>₦{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>₦{{ item.price * item.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStores'
const cart = useCartStore()
</script>

<style scoped>
.table-head th {
  background-color: #f9f1e7;
  font-weight: 400;
}
table,
th,
td {
  border: none !important;
}
</style>
