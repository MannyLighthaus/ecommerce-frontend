<script setup>
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/product'
import { useCartStore } from '@/stores/CartStore'

import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardImg,
  BCardTitle,
  BCardText,
  BButton,
} from 'bootstrap-vue-next'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SimpleToast from '@/components/SimpleToast.vue'

const router = useRouter()
const store = useProductStore()
const { products, loading } = storeToRefs(store)

const cartStore = useCartStore()
const toastRef = ref(null)

// Add to cart function for list view
function addToCartFromList(product) {
  cartStore.addToCart({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity: 1,
  })
  toastRef.value?.showToast('Product added successfully')
}

function goToProduct(id) {
  router.push({ name: 'product', params: { id } })
}
</script>
