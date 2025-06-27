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

// to increase the quantity in the selector. you can only add 10
function increaseQuantity() {
  if (quantity.value < 10) {
    quantity.value++
  }
}

// to decrease the quantity in the selector(not below 1)
function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

// const useToastController = useToastController()
</script>
<!--
<template>
  <SimpleToast ref="toastRef" />
  <div class="product-details-card">
    <BRow class="mt-4 g-3 px-md-2">
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
</template> -->

<!-- <style>
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
  border: none;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.2s ease;
}
.product-details-card .button:hover {
  background-color: rgba(220, 170, 60, 1);
  color: #000;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Pressed state */
.product-details-card .button:active {
  transform: scale(0.97);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
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
</style> -->

<template>
  <SimpleToast ref="toastRef" />
  <div class="product-details">
    <BRow class="mt-4 g-3 px-md-2">
      <!-- product image -->
      <BCol md="6">
        <div class="product-details__image-wrapper">
          <BCardImg class="product-details__image" :src="product.image" alt="Product" />
        </div>
      </BCol>

      <BCol md="6">
        <BCard class="product-details__card">
          <BCardTitle>{{ product.title }}</BCardTitle>
          <BCardText>
            <p class="product-details__price fs-3">₦ {{ product.price }}</p>
            <p class="product-details__rating fs-4">
              <span class="product-details__stars">★★★★</span> | {{ product.rating.count }} Reviews
            </p>
            <p class="product-details__description">{{ product.description }}</p>
          </BCardText>

          <div class="product-details__actions">
            <div class="product-details__qty">
              <button class="product-details__qty-btn" @click="decreaseQuantity">-</button>
              <span class="product-details__qty-value">{{ quantity }}</span>
              <button class="product-details__qty-btn" @click="increaseQuantity">+</button>
            </div>
            <BButton class="product-details__button" @click="addToCart">Add to cart</BButton>
          </div>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<style scoped lang="scss">
.product-details {
  &__image {
    max-height: 200px;
    object-fit: contain;

    @media (min-width: 768px) {
      max-height: 450px;
    }
  }

  &__card {
    border: none;
    padding-inline: 20px;

    .card-body {
      padding: 0;
      margin-block: 20px;
    }
  }

  &__price {
    font-size: 1.75rem; // matches fs-3
  }

  &__rating {
    font-size: 1.5rem; // matches fs-4
  }

  &__stars {
    color: gold;
  }

  &__description {
    // default paragraph
  }

  &__actions {
    display: flex;
    gap: 10px;
  }

  &__qty {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 0;
    border: 1px solid black;
    border-radius: 8px;
    padding: 5px 10px;
    width: fit-content;
  }

  &__qty-btn {
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
  }

  &__qty-value {
    font-weight: bold;
    text-align: center;
  }

  &__button {
    color: #fff;
    background-color: rgba(184, 142, 47, 1);
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      transform 0.2s ease;

    &:hover {
      background-color: rgba(220, 170, 60, 1);
      color: #000;
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.97);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
