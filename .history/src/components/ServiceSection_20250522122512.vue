<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
</script>
<template>
  <BContainer class="service-container">
    <BRow>
      <BCol>
        <i class="bi bi-headset service-icon"></i>
      </BCol>
      <BCol>
        <div class="service-texts">
          <p>24 / 7 Support</p>
          <p>Dedicated support</p>
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
