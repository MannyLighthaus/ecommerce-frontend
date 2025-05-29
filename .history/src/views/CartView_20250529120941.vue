<script>
import { BBRow } from 'bootstrap-vue-next'
</script>

<template>
  <div class="shop-header">
    <img src="@/assets/shop.jpg" alt="" class="img-fluid shop-image" />
    <h2 class="shop-text">Cart</h2>

    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Cart</li>
      </ol>
    </nav>
  </div>
  <CartTable />
</template>

<style scoped>
.shop-header {
  position: relative;
}

.shop-image {
  opacity: 40%;
  height: 177px;
  width: 100vw;
  object-fit: cover;
}

.shop-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  margin: 0;
  font-size: 26px;
}

.breadcrumb {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-decoration: none;
}

.breadcrumb-item {
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
    font-size: 14px;
  }
}

.breadcrumb-item.active {
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 1);
}

/* the divider */
.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
  font-size: 16px;
}

@media (min-width: 768px) {
  .shop-image {
    height: 316px;
  }
  .shop-text {
    font-size: 48px;
    font-weight: 500;
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
