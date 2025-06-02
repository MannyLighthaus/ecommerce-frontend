import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  // STATE: holds all cart data
  state: () => {
    // Try to get cart data from localStorage
    const savedCart = localStorage.getItem('cartItems')

    return {
      // Use saved cart if available, otherwise start with empty cart
      cartItems: savedCart ? JSON.parse(savedCart) : [],
      shippingFee: 200, // You can use this later if you want to include extra charges
    }
  },

  // GETTERS: like computed properties - calculating values from the state
  getters: {
    // Total quantity of all items in the cart
    totalItems: (state) => {
      return state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    },

    // Subtotal of all items (price * quantity), without shipping or tax
    subtotal: (state) => {
      return state.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity
      }, 0)
    },

    // Total amount (right now just using subtotal)
    total: (state) => {
      return state.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity
      }, 0)
    },
  },

  // ACTIONS: methods to change the state
  actions: {
    // Add item to cart or increase quantity if it already exists
    addToCart(product) {
      const existing = this.cartItems.find((item) => item.id === product.id)

      if (existing) {
        existing.quantity += product.quantity
      } else {
        this.cartItems.push({ ...product })
      }

      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },

    // Remove item by ID
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId)

      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },

    // Clear the entire cart
    clearCart() {
      this.cartItems = []

      // Remove from localStorage
      localStorage.removeItem('cartItems')
    },

    // Increase quantity of a specific item
    increaseQuantity(id) {
      const item = this.cartItems.find((item) => item.id === id)
      if (item) {
        item.quantity += 1
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
      }
    },

    // Decrease quantity of a specific item (but not below 1)
    decreaseQuantity(id) {
      const item = this.cartItems.find((item) => item.id === id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
      }
    },
  },
})
