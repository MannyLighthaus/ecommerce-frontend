<script setup>
import { BCol, BRow } from 'bootstrap-vue-next'
</script>
<template>
  <div class="f-container">
    <div class="footer-container">
      <!-- brand and address -->
      <div class="brand-address-container">
        <div class="brand-title">
          <h2>Furniro.</h2>
        </div>
        <div>
          <p class="address">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
      </div>

      <!-- links -->
      <div class="nav-link-container">
        <div>
          <h3>Links</h3>
        </div>
        <div class="nav-links">
          <div>
            <router-link to="/" class="nav-link">Home</router-link>
          <div>
          <div>
            <router-link to="/shop" class="nav-link">Shop</router-link>
          </div>
          <div>
            <router-link to="/about" class="nav-link">About</router-link>
          </div>
          <div>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </div>
        </div>
      </div>

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

        <div class="newsletter-input-container">
          <div cols="auto">
            <input type="email" placeholder="Enter your email" class="newsletter-input" />
          </div>
          <div>
            <p style="text-decoration: underline">Subscribe</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <hr />
      <p>2025 Furniro. All rights reserved.</p>
    </div>
  </div>
</template>

<style scoped>
.f-container {
  margin: 20px 0;
  padding: 48px 20px 32px;
  border-top: 1px solid black;
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
  /* border: none; */
}

.copyright {
  margin: 32px 0;
}
.copyright p {
  margin: 32px 0;
}
@media (min-width: 768px) {
  .f-container {
    margin: 20px 0;
    padding: 48px 20px 32px;
    border-top: 1px solid black;
  }

  .footer-container {
    display: flex;
    flex-direction: row;
    gap: 60px;
  }

  .brand-title {
    /* flex-grow: unset; */
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
}

.nav-link-container {
  display: flex;
  gap: 20px;
}
</style>
