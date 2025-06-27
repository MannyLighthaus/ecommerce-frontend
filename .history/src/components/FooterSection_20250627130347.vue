<script setup>
import { BContainer } from 'bootstrap-vue-next'
</script>

<template>
  <BContainer>
    <div class="footer__container">
      <div class="footer__section">
        <!-- brand and address -->
        <div class="footer__brand">
          <h2 class="footer__logo">Furniro.</h2>
          <p class="footer__address">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>

        <!-- links -->
        <div class="footer__links-group">
          <h5 class="footer__links-title">Links</h5>
          <div class="footer__links">
            <router-link to="/" class="footer__link">Home</router-link>
            <router-link to="/shop" class="footer__link">Shop</router-link>
            <router-link to="/about" class="footer__link">About</router-link>
            <router-link to="/contact" class="footer__link">Contact</router-link>
          </div>
        </div>

        <!-- help -->
        <div class="footer__links-group">
          <h5 class="footer__links-title">Help</h5>
          <div class="footer__links">
            <router-link to="/" class="footer__link">Payment options</router-link>
            <router-link to="/shop" class="footer__link">Returns</router-link>
            <router-link to="/about" class="footer__link">Privacy policies</router-link>
          </div>
        </div>

        <!-- newsletter -->
        <div class="footer__newsletter">
          <h5 class="footer__links-title">Newsletter</h5>
          <div class="footer__newsletter-form">
            <input
              type="email"
              id="newsletter"
              name="newsletter"
              placeholder="Enter your email"
              class="footer__input"
              required
            />
            <RouterLink to="/" class="footer__subscribe">Subscribe</RouterLink>
          </div>
        </div>
      </div>

      <div class="footer__copyright">
        <hr />
        <p>© 2025 Furniro. All rights reserved.</p>
      </div>
    </div>
  </BContainer>
</template>

<style scoped lang="scss">
.footer {
  &__container {
    margin: 20px 0;
    padding: 48px 20px 32px;
    border-top: 1px solid #9f9f9f;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      padding-inline: 30px 50px;
      padding-block: 48px 32px;
    }
  }

  &__brand {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__logo {
    font-size: 24px;
    font-weight: bold;
  }

  &__address {
    font-size: 16px;
    line-height: 150%;
    color: #9f9f9f;
  }

  &__links-group {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 768px) {
      gap: 20px;
    }
  }

  &__links-title {
    color: #9f9f9f;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
      gap: 30px;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: rgba(220, 170, 60, 1);
    }

    @media (min-width: 768px) {
      display: block;
      width: 100%;
      white-space: nowrap;
    }
  }

  &__newsletter {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 15px;
    }
  }

  &__input {
    border: none;
    border-bottom: 2px solid #000;
    background: transparent;
    outline: none;
    padding: 8px 0;
    font-size: 16px;
    // width: 100%;
  }

  &__subscribe {
    color: #000;
    text-decoration: none;

    &:hover {
      color: rgba(220, 170, 60, 1);
    }
  }

  &__copyright {
    margin: 32px 0;
    padding-inline-start: 0;

    @media (min-width: 768px) {
      padding-inline-start: 30px;
    }

    hr {
      height: 2px;
      background-color: #000;
      border: none;
    }

    p {
      margin: 32px 0;
    }
  }
}
</style>
