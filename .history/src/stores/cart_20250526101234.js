import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // Reactive array for cart items
  const cartItems = ref([])

  // Add or update product in cart

  function addToCart(product, quantity = 1) {
    // Check if the product is already in the cart by matching its id
    const existingItem = cartItems.value.find((item) => item.id === product.id)
    // if product exist, increase its quantity
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      // If new, add the product to cartItems to the with cart the specified quantity
      cartItems.value.push({ ...product, quantity }) // Add new item
    }
  }

  // Calculate total items in cart

  function getTotalItems() {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  }

  return { cartItems, addToCart, getTotalItems }
})
