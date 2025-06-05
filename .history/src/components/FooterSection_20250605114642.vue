<script setup></script>
<template>
  <div class="footer-container">
    <div class="footer-section">
      <!-- brand and address -->
      <div class="brand-address-container">
        <h2>Furniro.</h2>
        <p class="address">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
      </div>

      <!-- links -->
      <div class="nav-link-container">
        <h5 class="link-header">Links</h5>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/shop" class="nav-link">Shop</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </div>

      <!-- help -->
      <div class="nav-link-container">
        <h5 class="link-header">Help</h5>

        <div class="nav-links">
          <router-link to="/" class="nav-link">Payment options</router-link>
          <router-link to="/shop" class="nav-link">Returns</router-link>
          <router-link to="/about" class="nav-link">Privacy policies</router-link>
        </div>
      </div>

      <!-- newsletter -->
      <div>
        <h5 class="link-header">Newsletter</h5>
        <div class="newsletter-input-container">
          <input type="email" placeholder="Enter your email" class="newsletter-input" />
          <p style="text-decoration: underline">Subscribe</p>
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
.footer-container {
  margin: 20px 0;
  /* padding: 48px 20px 32px; */
  border-top: 1px solid #9f9f9f;
}
.footer-section {
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
  color: #9f9f9f;
}
.nav-link-container {
  display: flex;
  flex-direction: column;
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

.link-header {
  color: #9f9f9f;
}
@media (min-width: 768px) {
  .footer-container {
    /* padding: 48px 20px 32px; */
  }

  .footer-section {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  .nav-link-container {
    flex-direction: column;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .nav-links .nav-link {
    display: block;
    width: 100%;
    white-space: nowrap;
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
