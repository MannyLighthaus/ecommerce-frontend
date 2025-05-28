import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  // STATE: holds all cart data
  state: () => ({
    cartItems: [], // all items added to the cart array
    shippingFee: 0, // simple fixed shipping fee
  }),

  // GETTERS: like computed properties - calculating values from the state
  getters: {
    // Calculate the total quantity of items in the cart
    totalItems: (state) => {
      //looping through each cart item, adding the quantity and returning the total
      return state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    },

    // Subtotal before any additional fees (excluding shipping)
    subtotal: (state) => {
      return state.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity
      }, 0)
    },

    // Final total including shipping
    total: (state) => {
      return state.subtotal + state.shippingFee
    },
  },

  // ACTIONS: methods to change the state
  actions: {
    // Add item to cart or increase quantity if already exists
    addToCart(product) {
      console.log('Store addToCart:', product)
      const existing = this.cartItems.find((item) => item.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.cartItems.push({ ...product, quantity: 1 })
      }
    },

    // Remove item from cart
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId)
    },

    // Clear entire cart
    clearCart() {
      this.cartItems = []
    },

    increaseQuantity(id) {
      const item = this.cartItems.find((item) => item.id === id)
      if (item) {
        item.quantity += 1
      }
    },

    decreaseQuantity(id) {
      const item = this.cartItems.find((item) => item.id === id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
  },
})

// import { useCartStore } from '@/stores/cartStore'

// const cartStore = useCartStore()

// console.log(cartStore.totalItems)   // Total quantity
// console.log(cartStore.subtotal)     // Just items
// console.log(cartStore.total)        // subtotal + shipping
