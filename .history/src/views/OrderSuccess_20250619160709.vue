<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/CartStore'

const loading = ref(true)
const cart = useCartStore()
const router = useRouter()

// .env url
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

onMounted(async () => {
  // Redirect if no items in cart
  if (cart.cartItems.length === 0) {
    router.push('/shop')
    return
  }

  const orderData = {
    products: cart.cartItems.map((item) => ({
      productId: item.id,
      price: item.price,
      quantity: item.quantity,
      subtotal: item.price * item.quantity,
    })),
    total: cart.subtotal,
  }

  try {
    const res = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    })

    if (!res.ok) throw new Error('Failed to place order')

    cart.clearCart()
    loading.value = false
  } catch (err) {
    console.error('Order Error:', err)
    router.push('/cart') // Redirect to cart on failure
  }
})
</script>

<template>
  <div class="success-page">
    <div v-if="loading" class="loading-container">
      <div class="loading"></div>
      <p>Placing your order...</p>
    </div>

    <div v-else>
      <h1>Order Successful 🎉</h1>
      <p>Your order has been placed successfully. Thank you for shopping with us!</p>
      <RouterLink to="/" class="go-home">Go back to Home</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.success-page {
  text-align: center;
  margin-top: 20%;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.loading {
  border: 6px solid #f9f1e7;
  border-top: 6px solid #b88e2f;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.go-home {
  margin-top: 20px;
  display: inline-block;
  background-color: #b88e2f;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
}

@media (min-width: 768px) {
  .success-page {
    text-align: center;
    margin-top: 10%;
  }
}
</style>
