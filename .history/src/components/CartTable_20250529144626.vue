<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>

<template>
  <div class="cart-summary-container">
    <div class="cart-table-container">
      <div class="row justify-content-start">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table align-middle text-center">
              <thead class="table-head">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart.cartItems" :key="item.id">
                  <td>{{ item.title }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.quantity }}</td>
                  <td>{{ item.price * item.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
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
