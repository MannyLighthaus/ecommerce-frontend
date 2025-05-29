<script setup>
import { useCartStore } from '@/stores/CartStore'
import { BButton } from 'bootstrap-vue-next'
const cart = useCartStore()

function removeItem(id) {
  cart.removeFromCart(id)
}
</script>

<template>
  <div class="cart-container">
    <!-- Mobile Header -->
    <div class="cart-header">
      <p class="cart-header-text">Product</p>
      <p class="cart-header-text">Quantity</p>
    </div>

    <!-- Cart Items -->
    <div v-for="item in cart.cartItems" :key="item.id" class="cart-card">
      <p class="product-title">{{ item.title }}</p>

      <!-- Left Side: Product Info -->
      <div class="cart-content">
        <div class="image-price">
          <img :src="item.image" alt="product" />
          <span>₦{{ item.price }}</span>
        </div>

        <!-- Right Side: Quantity + Delete Icon -->
        <div class="qty-actions">
          <input type="number" v-model="item.quantity" min="1" class="qty-text" />
          <i
            class="bi bi-trash3-fill"
            @click="removeItem(item.id)"
            style="color: #b88e2f; font-size: 1.3rem; cursor: pointer"
          ></i>
        </div>
      </div>
    </div>
  </div>
  <div class="total-card">
    <div class="total-content">
      <h3>Cart Totals</h3>
      <div class="content-one">
        <p>Subtotal</p>
        <p># 500,000.00{{}}</p>
      </div>
      <div class="content-one">
        <p>Total</p>
        <p class="total-price"># 500,000.00{{}}</p>
      </div>
    </div>
    <BButton class="checkout-btn">Check Out</BButton>
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
  box-sizing: border-box;
  font-size: 14px;
  padding: 0;
}
.total-card {
  background-color: #f9f1e7;
  padding-block: 32px;
  padding-inline: 16px;
  margin-inline: 18px;
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
.subtotal-price {
  font-size: 14px;
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
}
</style>
