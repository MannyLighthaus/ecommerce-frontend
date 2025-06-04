<script setup>
import { useCartStore } from '@/stores/CartStore'
import { BTable, BButton } from 'bootstrap-vue-next'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function removeItem(id) {
  cart.removeFromCart(id)
}

function goToProduct(id) {
  router.push(`/product/${id}`)
}

const fields = [
  { key: 'product', label: 'Product' },
  { key: 'price', label: 'Price' },
  { key: 'quantity', label: 'Quantity' },
  { key: 'subtotal', label: 'Subtotal' },
  { key: 'actions', label: '' },
]

function getCartRows() {
  return cart.cartItems.map((item) => ({
    id: item.id,
    product: item,
    price: `₦${item.price.toLocaleString()}`,
    quantity: item.quantity,
    subtotal: `₦${(item.price * item.quantity).toLocaleString()}`,
    actions: item,
  }))
}
</script>

<template>
  <div class="cart-wrapper">
    <!-- Scrollable Table on Mobile -->
    <div class="table-scroll">
      <BTable
        :items="getCartRows()"
        :fields="fields"
        bordered="{false}"
        responsive="md"
        class="cart-table borderless-table"
      >
        <template #cell(product)="{ item }">
          <div class="product-info" @click="goToProduct(item.id)" style="cursor: pointer">
            <img :src="item.image" alt="product" />
            <span>{{ item.title }}</span>
          </div>
        </template>

        <template #cell(quantity)="{ item }">
          <input type="number" v-model="item.quantity" min="1" class="qty-text" />
        </template>

        <template #cell(actions)="{ item }">
          <i
            class="bi bi-trash3-fill"
            @click="removeItem(item.id)"
            style="color: #b88e2f; font-size: 1.3rem; cursor: pointer"
          ></i>
        </template>
      </BTable>
    </div>

    <!-- Cart Totals -->
    <div class="total-card">
      <div class="total-content">
        <h3>Cart Totals</h3>
        <div class="content-one">
          <p>Subtotal</p>
          <p>₦ {{ cart.subtotal.toLocaleString() }}</p>
        </div>
        <div class="content-one">
          <p>Total</p>
          <p class="total-price">₦ {{ cart.subtotal.toLocaleString() }}</p>
        </div>
      </div>
      <BButton class="checkout-btn">Check Out</BButton>
    </div>
  </div>
</template>

<style scoped>
.cart-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
}

.table-scroll {
  overflow-x: auto;
}

@media (min-width: 768px) {
  .cart-wrapper {
    flex-direction: row;
    align-items: flex-start;
  }

  .table-scroll {
    overflow-x: unset;
  }

  .total-card {
    margin-left: 24px;
  }
}

.borderless-table :deep(.table) {
  border: none;
}
.borderless-table :deep(.table th),
.borderless-table :deep(.table td) {
  border: none !important;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-info img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.qty-text {
  width: 50px;
  text-align: center;
  border: 1px solid #9f9f9f;
  border-radius: 5px;
}

.total-card {
  background-color: #f9f1e7;
  padding: 24px;
  height: fit-content;
  flex: 1;
}

.total-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.content-one {
  display: flex;
  justify-content: space-between;
}

.total-price {
  color: #b88e2f;
  font-size: 20px;
  font-weight: 400;
}

.checkout-btn {
  background-color: #b88e2f;
  width: 100%;
  border: none;
  border-radius: 0;
  text-align: center;
  padding: 12px 0;
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  margin-top: 20px;
}
</style>
