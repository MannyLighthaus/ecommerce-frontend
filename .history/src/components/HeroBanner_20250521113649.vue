<script setup>
import { BCard, BCardText, BButton } from 'bootstrap-vue-next'
</script>

<template>
  <section class="hero-section">
    <img src="@/assets/hero-image.png" alt="Hero" class="img-fluid hero-image" />

    <BCard class="hero-card">
      <BCardText class="card-text">
        <p class="arrival-text">New Arrival</p>
        <p class="collection-text">
          Discover Our <br />
          New Collection
        </p>
        <p class="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut elit. Ut elit tellus, luctus
          nec ullamcorper mattis.
        </p>
      </BCardText>

      <!-- button -->
      <BButton tag="router-link" to="/Shop" class="button"> Buy Now </BButton>
    </BCard>
  </section>
</template>

<style>
.hero-image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 100vh;
}
.arrival-text {
  font-size: 12px;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  margin: 0;
}
.collection-text {
  font-size: 30px;
  line-height: 120%;
  font-weight: 700;
  color: rgba(184, 142, 47, 1);
  margin-bottom: 10px;
}
.lorem-text {
  font-size: 15px;
  line-height: 150%;
  color: rgba(51, 51, 51, 1);
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.button {
  color: rgba(255, 255, 255, 1);
  background-color: rgba(184, 142, 47, 1);
  padding: 10px;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border-color: none;
  border-radius: 0%;
  width: 150px;
}

.hero-card {
  position: absolute;
  top: 50px;
  left: 20px;
  right: 20px;
  background-color: rgba(255, 243, 227, 1);
  padding: 08px;
  /* margin-inline: auto; */
}

@media (min-width: 768px) {
  .hero-card {
    display: block;
    position: absolute;
    top: 45%;
    left: 70%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
  }
  .arrival-text {
    font-size: 14px;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    margin: 0;
  }
  .collection-text {
    font-size: 30px;
    line-height: 120%;
    font-weight: 700;
    color: rgba(184, 142, 47, 1);
    margin-bottom: 10px;
  }
  .lorem-text {
    font-size: 14px;
    line-height: 150%;
    color: rgba(51, 51, 51, 1);
    font-weight: 500;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
}
</style>
