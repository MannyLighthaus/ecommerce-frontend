<script setup>
import {
  BContainer,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from 'bootstrap-vue-next'

import { computed } from 'vue'
import { useCartStore } from '@/stores/CartStore'

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cartItems.length)
</script>

<template>
  <BNavbar toggleable="md" class="navbar">
    <BContainer class="navbar__container">
      <!-- Left: Toggle + Brand -->
      <div class="navbar__left">
        <BNavbarToggle target="nav-collapse" />
        <BNavbarBrand>
          <router-link to="/" class="navbar__brand-link">
            <img src="@/assets/logo.png" alt="logo" width="30" />
            <span>Furniro</span>
          </router-link>
        </BNavbarBrand>
      </div>

      <!-- Right: Icons (mobile only) -->
      <div class="navbar__icons--mobile">
        <i class="bi bi-person-exclamation navbar__icon"></i>
        <i class="bi bi-search navbar__icon"></i>
        <router-link to="/cart" class="navbar__cart-wrapper">
          <i class="bi bi-cart navbar__icon"></i>
          <span class="navbar__cart-badge" v-if="cartCount > 0">{{ cartCount }}</span>
        </router-link>
      </div>

      <!-- Collapse: Navigation links -->
      <BCollapse id="nav-collapse" is-nav class="navbar__collapse">
        <BNavbarNav class="w-100 justify-content-center">
          <BNavItem>
            <router-link to="/" class="navbar__link">Home</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/shop" class="navbar__link">Shop</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/about" class="navbar__link">About</router-link>
          </BNavItem>
          <BNavItem>
            <router-link to="/contact" class="navbar__link">Contact</router-link>
          </BNavItem>
        </BNavbarNav>
      </BCollapse>

      <!-- Icons (desktop only) -->
      <div class="navbar__icons--desktop">
        <i class="bi bi-person-exclamation navbar__icon"></i>
        <i class="bi bi-search navbar__icon"></i>
        <i class="bi bi-heart navbar__icon"></i>
        <router-link to="/cart" class="navbar__cart-wrapper">
          <i class="bi bi-cart navbar__icon"></i>
          <span class="navbar__cart-badge" v-if="cartCount > 0" :key="cartCount">{{
            cartCount
          }}</span>
        </router-link>
      </div>
    </BContainer>
  </BNavbar>
</template>

<style scoped lang="scss">
.navbar {
  &__container {
    display: flex;
    align-items: center;
  }

  &__left {
    display: flex;
    gap: 10px;
    width: 100%;
  }

  &__brand-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-weight: bold;
    gap: 6px;
  }

  &__icons--mobile {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (min-width: 768px) {
      display: none;
    }
  }

  &__icons--desktop {
    display: none;
    gap: 20px;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  &__icon {
    font-size: 22px;
    color: black;
  }

  &__link {
    font-size: 16px;
    color: black;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: rgba(220, 170, 60, 1);
    }
  }

  &__cart-wrapper {
    position: relative;
    display: inline-block;

    &:hover .bi-cart {
      color: rgba(220, 170, 60, 1);
    }

    .bi-cart {
      transition: color 0.3s ease;
    }
  }

  &__cart-badge {
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
    animation: pop 0.3s ease;
    transition: transform 0.3s;
  }

  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
