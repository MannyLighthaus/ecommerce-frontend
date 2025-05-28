<script setup>
import { BCard, BCardImg, BCardTitle, BCardText, BButton, BCol, BRow } from 'bootstrap-vue-next'

// get the product from the parent (productdetails)
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
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
            <div class="quantity-selector">
              <button class="qty-btn" @click="decreaseQuantity">-</button>
              <span class="qty-value">10{{ quantity }}</span>
              <button class="qty-btn" @click="increaseQuantity">+</button>
            </div>

            <BButton class="button">Add to cart</BButton>
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
.product-details-card .card-img {
  max-height: 200px;
  object-fit: contain;
}

.product-details-card .btns-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 140px;
  height: 45px;
}

.qty-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
}
@media (min-width: 768px) {
  .product-details-card .card-img {
    max-height: 450px;
  }
  .product-details-card .card-container {
    border: none;
  }
  .product-details-card .btns-container {
    display: flex;
    gap: 10px;
  }
}
</style>
