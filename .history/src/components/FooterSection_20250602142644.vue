<script setup>
import { BCol, BRow } from 'bootstrap-vue-next'
</script>
<template>
  <div class="f-container">
    <div class="footer-container">
      <!-- brand and address -->
      <BRow class="brand-address-container">
        <BCol class="brand-title">
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
        <BRow class="nav-links">
          <BCol>
            <router-link to="/" class="nav-link">Home</router-link>
          </BCol>
          <BCol>
            <router-link to="/shop" class="nav-link">Shop</router-link>
          </BCol>
          <BCol>
            <router-link to="/about" class="nav-link">About</router-link>
          </BCol>
          <BCol>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </BCol>
        </BRow>
      </BRow>

      <!-- help -->
      <BRow class="nav-link-container">
        <BCol>
          <h3>Help</h3>
        </BCol>

        <BRow class="nav-links">
          <BCol>
            <router-link to="/" class="nav-link">Payment options</router-link>
          </BCol>
          <BCol>
            <router-link to="/shop" class="nav-link">Returns</router-link>
          </BCol>
          <BCol>
            <router-link to="/about" class="nav-link">Privacy policies</router-link>
          </BCol>
        </BRow>
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
            <p style="text-decoration: underline">Subscribe</p>
          </BCol>
        </BRow>
      </BRow>
    </div>
    <div class="copyright">
      <hr />
      <p>2025 Furniro. All rights reserved.</p>
    </div>
  </div>
</template>

<style scoped>
.f-container {
  margin: 20px;
  padding: 40px 20px 32px;
  border: 10px solid red;
}
.footer-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
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
hr {
  height: 2px;
  background-color: #000;
  border: none;
}
.f-container {
  margin: 0;
  padding: 0;
}

/* @media (min-width: 768px) {
  .footer-container {
    display: flex;
    flex-direction: row;
    gap: 60px;
  }

  .brand-title {
    flex-grow: unset;
  }

  .address {
    line-height: 150%;
    width: 100%;
    color: #9f9f9f;
    font-size: 16px;
  }
  .nav-link-container {
    display: flex;
    gap: 0px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  .newsletter-input-container {
    display: flex;
    flex-direction: row;

    gap: 15px;

    width: 100%;
  }
} */
</style>
