<script setup>
import { BContainer, BCol, BRow } from 'bootstrap-vue-next'
</script>
<template>
  <BContainer class="footer-container">
    <!-- brand and address -->
    <BRow>
      <BCol>
        <h2>Furniro</h2>
      </BCol>
    </BRow>

    <!-- links -->
    <BRow>
      <BCol> </BCol>
    </BRow>

    <!-- help -->
    <BRow>
      <BCol> </BCol>
    </BRow>

    <!-- newsletter -->
    <BRow>
      <BCol> </BCol>
    </BRow>
  </BContainer>
</template>

<style scoped>
.footer-container {
  display: flex;
  gap: 32px;
  padding-block-start: 48px;
  padding-block-end: 32px;
  padding-inline: 20px;
}
</style>
