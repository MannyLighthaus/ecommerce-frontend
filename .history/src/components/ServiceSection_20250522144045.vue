<script setup>
import { BContainer, BRow, BCol } from 'bootstrap-vue-next'
const services = [
  { icon: 'bi-headset', title: '24 / 7 Support', subtitle: 'Dedicated support' },
  { icon: 'bi-truck', title: 'Free Shipping', subtitle: 'Order over $150' },
  { icon: 'bi-patch-check', title: 'Warranty Protection', subtitle: 'Over 2 years' },
  { icon: 'bi-award', title: 'High Quality', subtitle: 'Crafted from top materials' },
]
</script>

<template>
  <BContainer class="service-container">
    <BRow class="service-row">
      <BCol v-for="(service, index) in services" :key="index">
        <div class="service-items">
          <i :class="`bi ${service.icon} service-icon`"></i>
          <div class="service-texts">
            <p class="text-one">{{ service.title }}</p>
            <p class="text-two">{{ service.subtitle }}</p>
          </div>
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
  color: #242424;
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
.service-row {
  display: flex;
  flex-direction: column;
}
</style>
