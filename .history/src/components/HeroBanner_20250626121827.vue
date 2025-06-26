<script setup>
import { BContainer, BRow, BCol, BCard, BCardText, BButton } from 'bootstrap-vue-next'
</script>

<template>
  <section class="hero-banner__section">
    <BContainer>
      <BRow class="justify-content-end">
        <BCol cols="12" md="6">
          <BCard class="hero-banner__card">
            <BCardText class="hero-banner__text">
              <p class="hero-banner_text-arrival">New Arrival</p>
              <p class="hero-banner_text-collection">
                Discover Our <br />
                New Collection
              </p>
              <p class="hero-banner_text-description">
                Step into the season with style. Explore our newest arrivals — where modern design
                meets timeless elegance. Curated for comfort, crafted for you.
              </p>
            </BCardText>
            <BButton tag="router-link" to="/Shop" class="hero-banner__button">Buy Now</BButton>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>
