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
  <BContainer class="service__container">
    <BRow class="service__row">
      <BCol v-for="(service, index) in services" :key="index">
        <div class="service__items">
          <i :class="`bi ${service.icon}service-icon`"></i>
          <div class="service__texts">
            <p class="service__text-one">{{ service.title }}</p>
            <p class="service__text-two">{{ service.subtitle }}</p>
          </div>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped lang="scss">
.service__container {
  background-color: #fff3e3;
  margin-block-start: 40px;
  margin-block-end: 30px;
}
.service {
  &__container {
    background-color: #fff3e3;
    margin-block-start: 40px;
    margin-block-end: 60px;
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-inline: 30px;
    padding-block-start: 30px;
    padding-block-end: 50px;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 10px;
      padding-block: 50px;
      padding-inline: 10px;
    }
  }

  &__items {
    display: flex;
    gap: 30px;

    @media (min-width: 768px) {
      gap: 10px;
    }
  }

  &__icon {
    font-size: 36px;
    color: #242424;
  }

  &__text-one {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: #242424;
  }

  &__text-two {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #898989;
  }
}
</style>
