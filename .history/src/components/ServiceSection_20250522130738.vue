<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
</script>
<template>
  <BContainer class="service-container">
    <BRow class="">
      <BCol cols="auto p-0">
        <i class="bi bi-headset service-icon"></i>
      </BCol>
      <BCol cols="auto">
        <div class="service-texts">
          <p class="text-one">24 / 7 Support</p>
          <p class="text-two">Dedicated support</p>
        </div>
      </BCol>
    </BRow>

    <BRow class="">
      <BCol cols="auto p-0">
        <i class="bi bi-truck service-icon"></i>
      </BCol>
      <BCol cols="auto p-0">
        <div class="service-texts">
          <p class="text-one">Free Shipping</p>
          <p class="text-two">Order over 150$</p>
        </div>
      </BCol>
    </BRow>

    <BRow class="">
      <BCol cols="auto p-0">
        <i class="bi bi-patch-check service-icon"></i>
      </BCol>
      <BCol cols="auto">
        <div class="service-texts">
          <p class="text-one">Warranty</p>
          <p class="text-two">Over 2 years</p>
        </div>
      </BCol>
    </BRow>

    <BRow class="">
      <BCol cols="auto p-0">
        <i class="bi bi-headset service-icon"></i>
      </BCol>
      <BCol cols="auto">
        <div class="service-texts">
          <p class="text-one">High Quality</p>
          <p class="text-two">crafted from top materials</p>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.service-container {
  background-color: #fff3e3;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.service-icon {
  font-size: 36px;
  color: #242424;
  padding: 0;
}
.text-one {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #242424;
}
.text-two {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #898989;
}
</style>
