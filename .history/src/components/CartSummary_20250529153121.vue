<script setup>
import { useCartStore } from '@/stores/CartStore'
const cart = useCartStore()

function removeItem(id) {
  cart.removeFromCart(id)
}
</script>
<template>hello</template>
<script></script>
