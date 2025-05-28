import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // Reactive array for cart items
  const cartItems = ref([])

  // Add or update product in cart

  function addToCart(product, quantity = 1) {
    // Check if the product is already in the cart by matching its id
    const existingItem = cartItems.value.find((item) => item.id === product.id)
    if (existingItem) {
      // if product exist, increase its quantity
      existingItem.quantity += quantity
    } else {
      cartItems.value.push({ ...product, quantity }) // Add new item
    }
  }

  // Calculate total items in cart

  function getTotalItems() {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  }

  return { cartItems, addToCart, getTotalItems }
})
