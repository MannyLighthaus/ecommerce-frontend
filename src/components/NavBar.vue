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

    <!-- nav-links -->
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
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
  gap: 2px;
}

.app-nav-bar {
  .container-fluid {
    justify-content: flex-start;
    gap: 10px;
  }
}
#nav-collapse {
  .navbar-nav {
    padding: 20px;
  }
}
</style>
