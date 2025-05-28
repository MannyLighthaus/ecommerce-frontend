<script setup>
import { BCard, BCardImg, BCardTitle, BCardText, BButton, BCol, BRow } from 'bootstrap-vue-next'
import { ref } from 'vue'
import { useCartStore } from '@/stores/CartStore'

// get the product from the parent (productdetails)
defineProps({
  product: {
    type: Object,
    required: true,
  },
})

//qty logic
const quantity = ref(1)

const cartStore = useCartStore()

// function addToCart() {
//   console.log('Adding to cart:', product.title, 'Quantity:', quantity.value)
//   cartStore.addToCart({ ...product, quantity: quantity.value })
// }

function increaseQuantity() {
  quantity.value++
}

function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>

<template>
  <div class="product-details-card">
    <BRow class="mt-4 g-3">
      <BCol md="6">
        <div class="image-container">
          <BCardImg class="card-img" :src="product.image" alt="Product" />
        </div>
      </BCol>
      <BCol md="6">
        <BCard class="card-container">
          <BCardTitle>{{ product.title }}</BCardTitle>
          <BCardText>
            <p class="fs-3">₦ {{ product.price }}</p>
            <p class="fs-4">
              <span style="color: gold">★★★★</span> | {{ product.rating.count }} Reviews
            </p>
            <p>{{ product.description }}</p>
          </BCardText>

          <div class="btns-container">
            <div class="qty-selector">
              <button class="qty-btn" @click="decreaseQuantity">-</button>
              <span class="qty-value">{{ quantity }}</span>
              <button class="qty-btn" @click="increaseQuantity">+</button>
            </div>
            <BButton class="button" @click="addToCart">Add to cart</BButton>
          </div>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<style>
.product-details-card .card-container {
  border: none;
}

.product-details-card .card-container .card-body {
  padding: 0;
  margin-block: 20px;
}

.product-details-card .button {
  color: black;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
  border-color: black;
  border-radius: 8px;
}
.product-details-card .button:active {
  background-color: #f9f1e7;
  color: inherit;
  border-color: inherit;
  box-shadow: none;
}

.product-details-card .card-img {
  max-height: 200px;
  object-fit: contain;
}

.product-details-card .btns-container {
  display: flex;
  gap: 10px;
}
.product-details-card .qty-selector {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px 10px;
  width: fit-content;
}
.product-details-card .qty-selector .qty-btn {
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
}
.product-details-card .qty-selector .qty-value {
  font-weight: bold;
  text-align: center;
}

@media (min-width: 768px) {
  .product-details-card .card-img {
    max-height: 450px;
  }
}
</style>
