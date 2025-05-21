<script setup>
import { BContainer, BCol, BRow } from 'bootstrap-vue-next'
</script>
<template>
  <BContainer class="footer-container">
    <!-- brand and address -->
    <BRow class="col-12 brand-address-container">
      <BCol>
        <h2>Furniro.</h2>
      </BCol>
      <BCol>
        <p class="address">400 University drive Suite 200 coral Gables, FL 33134 USA</p>
      </BCol>
    </BRow>

    <!-- links -->
    <BRow>
      <BCol>
        <h3>Links</h3>
      </BCol>
      <Brow>
        <Bcol class="g-2">
          <router-link to="/" class="nav-link">Home</router-link>
        </Bcol>
        <Bcol>
          <router-link to="/shop" class="nav-link">Shop</router-link>
        </Bcol>
        <Bcol>
          <router-link to="/about" class="nav-link">About</router-link>
        </Bcol>
        <Bcol>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </Bcol>
      </Brow>
    </BRow>

    <!-- help -->
    <BRow>
      <BCol> </BCol>
    </BRow>

    <!-- newsletter -->
    <BRow>
      <BCol> </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-block-start: 48px;
  padding-block-end: 32px;
  padding-inline: 20px;
}

.brand-address-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.address {
  font-size: 14px;
  line-height: 150%;
}
</style>
