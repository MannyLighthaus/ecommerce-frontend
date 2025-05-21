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
  <BNavbar toggleable="md" class="app-nav-bar">
    <BNavbarToggle target="nav-collapse" />
    <!-- logo/brand -->
    <BNavbarBrand>
      <router-link to="/" class="brand-logo-link">
        <img src="@/assets/logo.png" alt="logo" width="30" />
        <span> Furniro</span>
      </router-link>
    </BNavbarBrand>

    <div class="nav-icons">
      <i class="bi bi-person-exclamation"></i>
      <i class="bi bi-search"></i>
      <i class="bi bi-cart"></i>
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

.nav-icons {
  display: flex;
  align-items: center;
  gap: 16px;
}
.nav-icons i {
  font-size: 20px;
  font-weight: bold;
  color: black;
}

@media (min-width: 768px) {
  .nav-icons {
    display: none;
  }
}
</style>
