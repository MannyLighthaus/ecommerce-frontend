<script setup>
import { useCartStore } from '@/stores/CartStore'
import { BButton } from 'bootstrap-vue-next'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function removeItem(id) {
  cart.removeFromCart(id)
}

function goToProduct(id) {
  router.push(`/product/${id}`)
}

async function checkout() {
  try {
    const orderData = {
      userId: 1, // Use actual user ID if available
      items: cart.cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      totalAmount: cart.subtotal,
    }

    const res = await fetch('https://your-backend-url/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })

    if (!res.ok) {
      throw new Error('Order failed to submit')
    }

    cart.clearCart() // optional: clear cart after checkout
    router.push('/order-success')
  } catch (err) {
    console.error('Checkout Error:', err)
    alert('Something went wrong while placing your order.')
  }
}
</script>

<template>
  <div class="cart-wrapper">
    <!-- Scrollable Table -->
    <div class="table-scroll">
      <table class="cart-table table table-borderless">
        <thead>
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
            <td @click="goToProduct(item.id)" style="cursor: pointer">
              <div class="product-info">
                <img :src="item.image" alt="product" />
                <span>{{ item.title }}</span>
              </div>
            </td>
            <td>₦{{ item.price.toLocaleString() }}</td>
            <td>
              <input type="number" v-model="item.quantity" min="1" class="qty-text" />
            </td>
            <td>₦{{ (item.price * item.quantity).toLocaleString() }}</td>
            <td>
              <i
                class="bi bi-trash3-fill"
                @click="removeItem(item.id)"
                style="color: #b88e2f; font-size: 1.3rem; cursor: pointer"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
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
      <BButton class="checkout-btn" @click="checkout">Check Out</BButton>
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
  width: 100%;
}

.cart-table {
  min-width: 600px;
  background: #f9f1e7;
}

.cart-table th,
.cart-table td {
  /* text-align: center; */
  vertical-align: middle;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  max-width: 250px;
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
.cart-table thead {
  color: blue;
}

/* Desktop side-by-side layout */
@media (min-width: 768px) {
  .cart-wrapper {
    flex-direction: row;
    align-items: flex-start;
  }

  .table-scroll {
    overflow-x: unset;
  }

  .total-card {
    background-color: #f9f1e7;
    padding: 24px;
    height: fit-content;
    max-width: 350px; /* <- this keeps the summary from stretching too wide */
    width: 100%;
  }

  .product-info {
    max-width: 250px;
  }
}
</style>
