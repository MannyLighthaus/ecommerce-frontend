<script setup>
import { useCartStore } from '@/stores/CartStore'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function removeItem(id) {
  cart.removeFromCart(id)
}

function goToProduct(id) {
  router.push(`/product/${id}`)
}
</script>

<template>
  <div class="cart-wrapper container mt-4">
    <!-- Cart Content + Cart Totals Side by Side -->
    <div class="d-flex flex-column flex-md-row gap-4">
      <!-- Cart Table -->
      <div class="cart-table-wrapper w-100">
        <div class="table-responsive d-md-block">
          <table class="table table-borderless mb-0">
            <thead class="bg-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.cartItems" :key="item.id">
                <td class="align-middle" style="min-width: 200px">
                  <div class="d-flex align-items-center gap-2">
                    <img
                      :src="item.image"
                      alt="product"
                      class="rounded"
                      style="width: 50px; height: 50px; object-fit: contain; cursor: pointer"
                      @click="goToProduct(item.id)"
                    />
                    <span class="text-muted" style="cursor: pointer" @click="goToProduct(item.id)">
                      {{ item.title }}
                    </span>
                  </div>
                </td>
                <td class="align-middle">₦{{ item.price }}</td>
                <td class="align-middle">
                  <input
                    type="number"
                    v-model="item.quantity"
                    min="1"
                    class="form-control"
                    style="width: 60px"
                  />
                </td>
                <td class="align-middle">₦{{ (item.price * item.quantity).toLocaleString() }}</td>
                <td class="align-middle">
                  <i
                    class="bi bi-trash3-fill text-warning"
                    style="cursor: pointer; font-size: 1.2rem"
                    @click="removeItem(item.id)"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Cart Totals Card -->
      <div class="cart-totals bg-light p-4" style="min-width: 300px; flex-shrink: 0">
        <h5 class="mb-4">Cart Totals</h5>
        <div class="d-flex justify-content-between mb-2">
          <p class="mb-0">Subtotal</p>
          <p class="mb-0">₦{{ cart.subtotal.toLocaleString() }}</p>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <p class="mb-0">Total</p>
          <p class="mb-0 text-warning fw-bold">₦{{ cart.subtotal.toLocaleString() }}</p>
        </div>
        <button class="btn btn-warning w-100 text-white">Check Out</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mobile: Make cart table scrollable */
.cart-table-wrapper {
  overflow-x: auto;
}

@media (min-width: 768px) {
  .cart-table-wrapper {
    overflow-x: visible;
  }
}
</style>
