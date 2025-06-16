<script setup>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue-next'

import { computed } from 'vue'
import { useCartStore } from '@/stores/CartStore'

// access the store to get cart data(total items count)
const cartStore = useCartStore()

//computed property to get the no. of items in the cart
const cartCount = computed(() => cartStore.cartItems.length)
</script>

<template>
  <BNavbar toggleable="md p-0 my-3" class="app-nav-bar">
    <div class="toggle-brand-container">
      <BNavbarToggle target="nav-collapse" />
      <!-- logo/brand -->
      <BNavbarBrand>
        <router-link to="/" class="brand-logo-link">
          <img src="@/assets/logo.png" alt="logo" width="30" />
          <span> Furniro</span>
        </router-link>
      </BNavbarBrand>
    </div>

    <!-- icons -->
    <div class="nav-icons">
      <i class="bi bi-person-exclamation"></i>
      <i class="bi bi-search"></i>
      <router-link to="/cart" class="cart-icon-wrapper">
        <i class="bi bi-cart"></i>
        <!-- only show if greater than 0 -->
        <span class="cart-count-badge" v-if="cartCount > 0">{{ cartCount }}</span>
      </router-link>
    </div>

    <!-- nav-links -->
    <BCollapse id="nav-collapse" is-nav class="mobile-overlay-collapse">
      <BNavbarNav class="justify-content-center w-100">
        <BNavItem>
          <router-link to="/" class="nav-link">Home</router-link>
        </BNavItem>
        <BNavItem>
          <router-link to="/shop" class="nav-link">Shop</router-link>
        </BNavItem>
        <BNavItem>
          <router-link to="/about" class="nav-link">About</router-link>
        </BNavItem>
        <BNavItem>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </BNavItem>
      </BNavbarNav>
    </BCollapse>

    <!-- icons for larger screens-->
    <div class="nav-icons-md">
      <i class="bi bi-person-exclamation"></i>
      <i class="bi bi-search"></i>
      <i class="bi bi-heart"></i>
      <router-link to="/cart" class="cart-icon-wrapper">
        <i class="bi bi-cart"></i>
        <!-- only show if greater than 0 -->
        <span class="cart-count-badge" v-if="cartCount > 0">{{ cartCount }}</span>
      </router-link>
    </div>
  </BNavbar>
</template>

<style scoped>
.toggle-brand-container {
  display: flex;
  gap: 12px;
}
.brand-logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  gap: 6px;
}

/* hamburger and brandname/logo side by side  */
.app-nav-bar {
  .container-fluid {
    justify-content: space-between;
    padding-inline: 20px;
    padding-block: 24px;
  }
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-icons-md {
  display: none;
}
.nav-icons i {
  font-size: 22px;
  color: black;
}

.nav-link {
  font-size: 16px;
  color: black;
  font-weight: 500;
}
.nav-link:hover {
  color: rgba(220, 170, 60, 1);
}
.cart-icon-wrapper {
  position: relative;
  display: inline-block;
}

.cart-count-badge {
  position: absolute;
  top: -2px;
  right: -8px;
  background-color: rgba(184, 142, 47, 1);
  color: white;
  border-radius: 50%;
  font-size: 14px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
/* larger screen size */

@media (min-width: 768px) {
  .app-nav-bar {
    .container-fluid {
      padding-inline: 40px;
      padding-block: 0px;
    }
  }
  .nav-icons {
    display: none;
  }
  .nav-icons-md {
    display: flex;
    gap: 20px;
  }

  nav-icons-md i {
    font-size: 22px;
    color: black;
  }
  /* .bi-cart::before {
    color: black;
  } */
  .cart-icon-wrapper .bi-cart {
    color: rgb(0, 0, 0);
    transition: color 0.3s ease;
  }

  .cart-icon-wrapper:hover .bi-cart {
    color: rgba(220, 170, 60, 1);
  }
}
</style>
