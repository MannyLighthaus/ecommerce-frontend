<script setup>
import ProductList from '@/components/ProductList.vue'
import ServiceSection from '@/components/ServiceSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import { BContainer } from 'bootstrap-vue-next'

// import the pinia store for product data management
const store = useProductStore()

// Use the onMounted lifecycle hook from Vue to run code when the component is mounted
onMounted(() => {
  // Check if the products array in the Pinia store is empty (no products loaded yet)
  if (!store.products.length) {
    // If empty, call the fetchProducts function to retrieve products from the Fake Store API
    store.fetchProducts()
  }
})
</script>

<template>
  <BContainer fluid class="p-0">
    <div class="shop-header">
      <div class="shop-overlay">
        <h2 class="shop-text">Shop</h2>
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Shop</li>
          </ol>
        </nav>
      </div>
    </div>
  </BContainer>

  <ProductList />
  <ServiceSection />
  <FooterSection />
</template>

<style scoped>
.shop-header {
  background-image: url('@/assets/shop.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 177px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.shop-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4); /* Optional overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.shop-text {
  font-weight: bold;
  font-size: 26px;
  margin: 0;
  color: #000;
}

.breadcrumb {
  margin-top: 0.5rem;
  background: transparent;
  padding: 0;
}

.breadcrumb-item a {
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  font-size: 14px;
}

.breadcrumb-item.active {
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 1);
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  font-size: 16px;
}

@media (min-width: 768px) {
  .shop-text {
    font-size: 48px;
  }
  .breadcrumb-item {
    a {
      font-size: 16px;
    }
  }
  .breadcrumb-item.active {
    font-size: 16px;
  }
  .breadcrumb {
    top: 65%;
    left: 50%;
  }
}
</style>
