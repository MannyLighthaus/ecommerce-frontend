<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
</script>
<template>
  <BContainer class="service-container">
    <BRow class="align-items-center">
      <BCol cols="auto">
        <i class="bi bi-headset service-icon"></i>
      </BCol>
      <BCol cols="auto">
        <div class="service-texts">
          <p class="text-one">24 / 7 Support</p>
          <p class="text-two">Dedicated support</p>
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
.text-one {
  margin: 0;
}
.text-two {
  margin: 0;
}
</style>
