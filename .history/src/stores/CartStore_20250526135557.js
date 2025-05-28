import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  // STATE: holds all cart data
  state: () => ({
    cartItems: [], // all items added to the cart
    shippingFee: 20, // simple fixed shipping fee
  }),

  // GETTERS: like computed properties
  getters: {
    // Total number of items in cart
    totalItems: (state) => {
      return state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    },

    // Subtotal before any additional fees
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
    // Add item to cart or increase quantity
    addToCart(product) {
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
  },
})
