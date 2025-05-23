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
        <BCardImg
          :src="product.image"
          alt="Product"
          style="max-height: 200px; object-fit: contain"
        />
      </div>
    </BCol>
    <BCol md="6">
      <BCard>
        <BCardTitle>{{ product.title }}</BCardTitle>
        <BCardText>
          <p><strong>Price:</strong> ₦ {{ product.price }}</p>
          <p><strong>Description:</strong> {{ product.description }}</p>
          <p><strong>Category:</strong> {{ product.category }}</p>
          <p>
            <strong>Rating:</strong> {{ product.rating.rate }} ({{ product.rating.count }} reviews)
          </p>
        </BCardText>
        <BButton class="button">Add to cart</BButton>
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
  border-radius: 0%;
  width: 140px;
  height: 45px;
}
</style>
