// Import Pinia’s defineStore to create a store
import { defineStore } from 'pinia'
// Import Vue’s ref for reactive variables
import { ref } from 'vue'

// Create a Pinia store named 'product'
export const useProductStore = defineStore('product', () => {
  // Store products as a reactive array
  const products = ref([])

  const product = ref(null)
  // Track loading state (true when fetching, false when done)
  const loading = ref(false)

  // Fetch products from Fake Store API
  async function fetchProducts() {
    // Set loading to true before fetching
    loading.value = true
    try {
      // Make API request
      const response = await fetch('https://fakestoreapi.com/products')

      // Convert response to JSON
      const data = await response.json()
      // Map API data to match our model
      products.value = data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        image: item.image,
      }))
    } catch (error) {
      // Log any errors (e.g., network issues)
      console.error('Fetch error:', error)
    } finally {
      // Set loading to false after fetching (success or fail)
      loading.value = false
    }
  }

  // Fetch single product by id

  async function fetchProductById(id) {
    loading.value = true
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const item = await response.json()
      product.value = {
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        image: item.image,
        rating: item.rating,
      }
    } catch (err) {
      console.log('Fetch error:', err)
      product.value = null
    } finally {
      loading.value = false
    }
  }
  // Expose products, loading, and fetchProducts to components
  return { products, loading, fetchProducts, fetchProductById }
})
