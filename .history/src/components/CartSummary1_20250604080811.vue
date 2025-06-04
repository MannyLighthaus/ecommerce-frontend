<script setup>
import { useCartStore } from '@/stores/CartStore'
import { BButton, BTable } from 'bootstrap-vue-next'
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
  { key: 'image', label: 'Product' },
  { key: 'price', label: 'Price (₦)' },
  { key: 'quantity', label: 'Quantity' },
  { key: 'subtotal', label: 'Subtotal (₦)' },
  { key: 'actions', label: '' },
]
</script>

<template>
  <!-- MOBILE LAYOUT -->
  <div class="cart-container">
    <div class="cart-header">
      <p class="cart-header-text">Product</p>
      <p class="cart-header-text">Quantity</p>
    </div>

    <div v-for="(item, index) in cart.cartItems" :key="item.id" class="cart-card">
      <p class="product-title">{{ item.title }}</p>

      <div class="cart-content">
        <div class="image-price" @click="goToProduct(item.id)">
          <img :src="item.image" alt="product" />
          <span>₦{{ item.price }}</span>
        </div>

        <div class="qty-actions">
          <input type="number" v-model="item.quantity" min="1" class="qty-text" />
          <i
            class="bi bi-trash3-fill"
            @click="removeItem(item.id)"
            style="color: #b88e2f; font-size: 1.3rem; cursor: pointer"
          ></i>
        </div>
      </div>
      <hr v-if="index !== cart.cartItems.length - 1" />
    </div>

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

  <!-- DESKTOP LAYOUT -->
  <div class="desktop-cart-table">
    <BTable
      :items="cart.cartItems"
      :fields="fields"
      responsive="md"
      striped
      hover
      small
      class="mt-4"
    >
      <template #cell(image)="data">
        <div class="d-flex align-items-center gap-2">
          <img
            :src="data.item.image"
            alt="Product"
            style="width: 60px; height: 60px; object-fit: contain; cursor: pointer"
            @click="goToProduct(data.item.id)"
          />
          <span>{{ data.item.title }}</span>
        </div>
      </template>

      <template #cell(quantity)="data">
        <input
          type="number"
          min="1"
          v-model="data.item.quantity"
          class="form-control form-control-sm"
        />
      </template>

      <template #cell(subtotal)="data">
        ₦{{ (data.item.quantity * data.item.price).toLocaleString() }}
      </template>

      <template #cell(actions)="data">
        <i
          class="bi bi-trash3-fill"
          @click="removeItem(data.item.id)"
          style="color: #b88e2f; font-size: 1.3rem; cursor: pointer"
        ></i>
      </template>
    </BTable>

    <div class="text-end mt-3 pe-3">
      <h5>Total: ₦{{ cart.subtotal.toLocaleString() }}</h5>
      <BButton class="checkout-btn mt-2">Check Out</BButton>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  margin-block-start: 32px;
  margin-block-end: 10%;
}
.cart-header {
  display: flex;
  justify-content: space-between;
  background: #f9f1e7;
  padding-inline: 18px;
  padding-block: 8px;
}
.cart-header-text {
  margin: 0;
  padding: 0;
}
.cart-card {
  padding-inline: 16px;
  margin-top: 20px;
}
.cart-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-title {
  color: #9f9f9f;
  font-size: 14px;
}
.image-price {
  display: flex;
  align-items: center;
  gap: 12px;
}
.image-price img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.qty-actions {
  display: flex;
  gap: 30px;
}
.qty-actions input.qty-text {
  width: 30px;
  text-align: center;
  border: 1px solid #9f9f9f;
  border-radius: 5px;
  font-size: 14px;
}
.total-card {
  background-color: #f9f1e7;
  padding-block: 32px;
  padding-inline: 16px;
  margin-inline: 18px;
  margin-block-start: 40px;
}
.total-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
hr {
  border: 0;
  border-top: 1px solid black;
  margin: 16px 0;
}
.desktop-cart-table {
  display: none;
  margin: 40px 18px;
}
@media (min-width: 768px) {
  .cart-container {
    display: none;
  }
  .desktop-cart-table {
    display: block;
  }
}
</style>
