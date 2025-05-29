<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>

<template>
  <table class="table text-center">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cart.cartItems" :key="item.id">
        <td class="d-flex align-items-center gap-2 justify-content-center">
          <img :src="item.image" width="40" height="40" />
          <span>{{ item.title }}</span>
        </td>
        <td>₦{{ item.price.toLocaleString() }}</td>
        <td>{{ item.quantity }}</td>
        <td>₦{{ (item.price * item.quantity).toLocaleString() }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.cart-summary-container {
  padding-inline: 30px;
  padding-block: 0px;
  background-color: #ffffff;
}
.cart-table-container .table-head th {
  background-color: #f9f1e7;
  font-weight: 400;
}
.cart-table-container table,
.cart-table-container th,
.cart-table-container td {
  border: none !important;
}
</style>
