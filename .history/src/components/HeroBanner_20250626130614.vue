<script setup>
import { BContainer, BRow, BCol, BCard, BCardText, BButton } from 'bootstrap-vue-next'
</script>

<template>
  <section class="hero-section">
    <BContainer>
      <BRow class="justify-content-end">
        <BCol cols="12" md="6">
          <BCard class="hero-card">
            <BCardText class="card-text">
              <p class="arrival-text">New Arrival</p>
              <p class="collection-text">
                Discover Our <br />
                New Collection
              </p>
              <p class="lorem-text">
                Step into the season with style. Explore our newest arrivals — where modern design
                meets timeless elegance. Curated for comfort, crafted for you.
              </p>
            </BCardText>
            <BButton tag="router-link" to="/Shop" class="button">Buy Now</BButton>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<style scoped>
.hero-section {
  background-image: url('@/assets/shop.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  padding: 80px 0;
  display: flex;
  align-items: center;
}

.hero-card {
  background-color: #fff3e3;
  padding: 16px;
  border: none;
  max-width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transform: translateY(50px);
}

.arrival-text {
  font-size: 12px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: #333;
  margin: 0;
}
.collection-text {
  font-size: 30px;
  line-height: 120%;
  font-weight: 700;
  color: #b88e2f;
  margin-bottom: 10px;
}
.lorem-text {
  font-size: 15px;
  line-height: 150%;
  color: #333;
  font-style: italic;
}
.card-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.button {
  color: #fff;
  background-color: #b88e2f;
  padding: 10px;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  width: 150px;
  transition: all 0.3s ease;
}
.button:hover {
  background-color: #dcaa3c;
  color: #000;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.button:active {
  transform: scale(0.97);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
  .arrival-text {
    font-size: 14px;
  }
  .collection-text {
    font-size: 34px;
  }
  .lorem-text {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
