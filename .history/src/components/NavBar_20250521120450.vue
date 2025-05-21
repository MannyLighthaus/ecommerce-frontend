<script setup>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue-next'
</script>

<template>
  <BNavbar toggleable="md" class="app-nav-bar px-3">
    <BNavbarToggle target="nav-collapse" />
    <!-- logo/brand -->
    <BNavbarBrand>
      <router-link to="/" class="brand-logo-link">
        <img src="@/assets/logo.png" alt="logo" width="30" />
        <span> Furniro</span>
      </router-link>
    </BNavbarBrand>

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
          <router-link to="/contact" class="nav-link">Contacts</router-link>
        </BNavItem>
        <font-awesome-icon :icon="['far', 'cart-shopping']" style="color: #000000" />
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<style>
.brand-logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  gap: 6px;
}

/* hamburger and brandname/logo side by side s */
.app-nav-bar {
  .container-fluid {
    justify-content: flex-start;
    gap: 10px;
  }
}

.nav-link {
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 100%;
}
</style>
