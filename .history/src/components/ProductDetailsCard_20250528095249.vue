<script setup>
import { BCard, BCardImg, BCardTitle, BCardText, BButton, BCol, BRow } from 'bootstrap-vue-next'

// get the product from the parent (productdetails)
defineProps({
  product: {
    type: Object,
    required: true,
  },
})

// // Track selected quantity
// const quantity = ref(1)

// // Decrease quantity but not below 1
// function decreaseQuantity() {
//   if (quantity.value > 1) quantity.value--
// }

// // Increase quantity
// function increaseQuantity() {
//   quantity.value++
// }

// // Add to cart handler (this will be connected to the cart store later)
// function addToCart() {
//   console.log('Adding to cart:', product, 'Quantity:', quantity.value)
//   // You’ll later call something like cartStore.addToCart(product, quantity.value)
}
</script>

<template>
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
          <p><strong>Price:</strong> ₦ {{ product.price }}</p>
          <p><strong>Description:</strong> {{ product.description }}</p>
          <p><strong>Category:</strong> {{ product.category }}</p>
          <p>
            <strong>Rating:</strong> {{ product.rating.rate }} ({{ product.rating.count }} reviews)
          </p>
        </BCardText>
        <!--
        <div>
          <BButton class="button">Add to cart</BButton>
          <BButton class="button">Add to cart</BButton>
        </div> -->
      </BCard>
    </BCol>
  </BRow>
</template>

<style scoped>
.button {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(184, 142, 47, 1);
  font-size: 14px;
  cursor: pointer;
  border-color: none;
  border-radius: 5px;
  width: 140px;
  height: 45px;
}
/* .image-container {
  background-color: #f9f1e7;
  padding: 5px;
  text-align: center;
} */
.card-img {
  max-height: 200px;
  object-fit: contain;
}
@media (min-width: 768px) {
  .card-img {
    max-height: 450px;
  }
  .card-container {
    border: none;
  }
}
</style>
