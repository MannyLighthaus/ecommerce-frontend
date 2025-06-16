<script setup>
import { BCard, BCardImg, BCardTitle, BCardText, BButton, BCol, BRow } from 'bootstrap-vue-next'
import { ref } from 'vue'
import { useCartStore } from '@/stores/CartStore'

import SimpleToast from '@/components/SimpleToast.vue'

// reference to the SimpleToast component.
// binds the DOM/component instance to the variable.
const toastRef = ref(null)

// get the product from the parent (productdetails)
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

//reactive state for the quantity starting at 1
const quantity = ref(1)

//access the cart store to interact with the cart state
const cartStore = useCartStore()

// called the method from the cart store when  "add to cart button" is clicked
function addToCart() {
  console.log('Adding to cart:', props.product.title, 'Quantity:', quantity.value)
  cartStore.addToCart({
    id: props.product.id,
    title: props.product.title,
    price: props.product.price,
    image: props.product.image,
    quantity: quantity.value,
  })

  // toastRef.value?.showToast(`${props.product.title} added to cart`)
  toastRef.value?.showToast('Product added successfully')
}

// to increase the quantity in the selector
function increaseQuantity() {
  quantity.value++
}

// to decrease the quantity in the selector(not below 1)
function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

// const useToastController = useToastController()
</script>

<template>
  <SimpleToast ref="toastRef" />
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
  padding-inline: 20px;
}

.product-details-card .card-container .card-body {
  padding: 0;
  margin-block: 20px;
}

.product-details-card .button {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(184, 142, 47, 1);
  font-size: 20px;
  cursor: pointer;
  border: non;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.2s ease;
}
.product-details-card .button:hover {
  background-color: rgba(184, 142, 47, 1); /* gold */
  color: white;
  border-color: rgba(184, 142, 47, 1);
  transform: scale(1.03);
}

/* Pressed state */
.product-details-card .button:active {
  background-color: rgba(184, 142, 47, 0.8);
  transform: scale(0.97);
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
