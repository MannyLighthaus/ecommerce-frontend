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
    <BRow class="g-4 text-center justify-content-center">
      <BCol cols="12" md="3" v-for="(service, index) in services" :key="index">
        <div class="d-flex align-items-center gap-3 justify-content-center">
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

<!-- <style scoped>
.service-container {
  background-color: #fff3e3;
  padding: 40px 30px;
  margin-top: 30px;
}

.service-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
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
/* .service-texts {
  display: flex;
  flex-direction: column;
  justify-content: center;
} */

@media (min-width: 768px) {
  .service-container {
    background-color: #fff3e3;
    padding: 0;
    margin: 0;
  }
}
</style> -->
