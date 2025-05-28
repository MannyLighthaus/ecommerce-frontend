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

        <div class="btn-container">
          <BButton class="btn">-</BButton>
          <span> {{ quantity }}qty</span>
          <BButton class="btn">+</BButton>
          <BButton class="button">Add to cart</BButton>
        </div>
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
.btn {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(184, 142, 47, 1);
  font-size: 18px;
}
.btn-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (min-width: 768px) {
  .card-img {
    max-height: 450px;
  }
  .card-container {
    border: none;
  }
  .btn-container {
    display: flex;
    gap: 10px;
  }
}
</style>
