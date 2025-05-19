<!-- <script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '../stores/product.js'

const { products, fetchProducts } = useProductStore()
const productList = ref([])

onMounted(async () => {
  await fetchProducts()
  productList.value = products.value
})
</script> -->

<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
import HeroBanner from '@/components/HeroBanner.vue'
</script>

<template>
  <!-- hero section -->
  <HeroBanner />

  <!--  -->
  <section>
    <BContainer fluid>
      <BRow>
        <BCol class="d-flex flex-column text-center my-4">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </BCol>
      </BRow>

      <BRow class="text-center g-2 px-5">
        <BCol cols="12" md="4">
          <img src="@/assets/dining.png" alt=" dining" class="img-fluid" />
          <p>Dining</p>
        </BCol>
        <BCol cols="12" md="4">
          <img src="@/assets/living room.png" alt="living-room" class="img-fluid" />
          <p>Living</p>
        </BCol>
        <BCol cols="12" md="4">
          <img src="@/assets/bedroom.png" alt="bedroom" class="img-fluid" />
          <p>Bedroom</p>
        </BCol>
      </BRow>
    </BContainer>
    <!--  -->
  </section>
</template>

<style></style>
