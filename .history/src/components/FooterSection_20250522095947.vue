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
        <p class="address">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
      </BCol>
    </BRow>

    <!-- links -->
    <BRow class="nav-link-container">
      <BCol>
        <h3>Links</h3>
      </BCol>
      <Brow class="nav-links">
        <Bcol>
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
    <BRow class="nav-link-container">
      <BCol>
        <h3>Help</h3>
      </BCol>

      <Brow class="nav-links">
        <Bcol>
          <router-link to="/" class="nav-link">Payment options</router-link>
        </Bcol>
        <Bcol>
          <router-link to="/shop" class="nav-link">Returns</router-link>
        </Bcol>
        <Bcol>
          <router-link to="/about" class="nav-link">Privacy policies</router-link>
        </Bcol>
      </Brow>
    </BRow>

    <!-- newsletter -->
    <BRow>
      <BCol>
        <h3>Newsletter</h3>
      </BCol>

      <BRow class="newsletter-input-container">
        <BCol cols="auto">
          <input type="email" placeholder="Enter your email" class="newsletter-input" />
        </BCol>
        <BCol cols="auto">
          <p>Subscribe</p>
        </BCol>
        <hr style="height: 2px; background-color: black; border: none" />
        <BCol>
          <p>2025 Furniro. All rights reserved.</p>
        </BCol>
      </BRow>
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
  font-size: 16px;
  line-height: 150%;
  width: 90%;
}
.nav-link-container {
  display: flex;
  gap: 12px;
}
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.newsletter-input {
  border: none;
  border-bottom: 2px solid #000; /* underline */
  background: transparent;
  outline: none;
  padding: 8px 0;
  font-size: 16px;
}
.newsletter-input-container {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

@media (min-width: 768px) {
  .brand-address-container {
    margin-top: 2px solid red;
  }
}
</style>
