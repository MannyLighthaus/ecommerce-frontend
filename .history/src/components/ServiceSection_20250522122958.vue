<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
</script>
<template>
  <BContainer class="service-container">
    <BRow>
      <BCol cols="auto">
        <i class="bi bi-headset service-icon"></i>
      </BCol>
      <BCol cols="auto">
        <div class="service-texts">
          <p class="text-one">24 / 7 Support</p>
          <p class="text-two" support</p>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.service-container {
  background-color: #fff3e3;
}
.service-icon {
  font-size: 36px;
  color: black;
}
</style>
