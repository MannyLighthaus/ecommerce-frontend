<script setup>
import { useCartStore } from '@/stores/CartStore'
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
          <input type="number" v-model="item.quantity.value" min="1" class="qty-text" />
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

<style scoped>
.cart-container {
  margin-top: 32px;
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
</style>
