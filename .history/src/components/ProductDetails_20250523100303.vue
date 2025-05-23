<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import { storeToRefs } from 'pinia'
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardImg,
  BCardTitle,
  BCardText,
  BButton,
  BBreadcrumb,
  BBreadcrumbItem,
} from 'bootstrap-vue-next'
import NavBar from '../components/NavBar.vue' // Adjust path if needed

const route = useRoute()
const router = useRouter()
const store = useProductStore()
const { product, loading } = storeToRefs(store)

onMounted(() => {
  store.fetchProductById(route.params.id)
})
function goToShop() {
  router.push({ name: 'shop' })
}
</script>
<template>hello</template>
<style scoped></style>
