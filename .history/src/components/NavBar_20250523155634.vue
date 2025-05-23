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

    <!-- icons for larger screens-->
    <div class="nav-icons-md">
      <i class="bi bi-person-exclamation"></i>
      <i class="bi bi-search"></i>
      <i class="bi bi-heart"></i>
      <i class="bi bi-cart"></i>
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
  font-size: 3opx;
  color: black;
  font-weight: 500;
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
}
</style>
