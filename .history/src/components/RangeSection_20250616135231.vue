<script setup></script>
<template>
  <BContainer fluid>
    <BRow>
      <BCol class="d-flex flex-column text-center my-5">
        <h2 class="range-header">Browse The Range</h2>
        <p class="range-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </BCol>
    </BRow>

    <BRow class="text-center g-2 px-5">
      <BCol cols="12" md="4">
        <img src="@/assets/dining.png" alt="dining" class="img-fluid" />
        <p class="text">Dining</p>
      </BCol>
      <BCol cols="12" md="4">
        <img src="@/assets/living room.png" alt="living-room" class="img-fluid" />
        <p class="text">Living</p>
      </BCol>
      <BCol cols="12" md="4">
        <img src="@/assets/bedroom.png" alt="bedroom" class="img-fluid" />
        <p class="text">Bedroom</p>
      </BCol>
    </BRow>
  </BContainer>
</template>
<style scoped></style>
