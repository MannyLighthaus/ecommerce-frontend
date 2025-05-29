<script setup>
// We'll connect this to Pinia store soon
</script>

<template>
  <div class="container my-4">
    <div class="table-responsive">
      <table class="table table-bordered align-middle text-center">
        <thead class="table-dark">
          <tr>
            <th scope="col">Product Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <!-- Static row for now -->
          <tr>
            <!-- <td class="d-flex align-items-center gap-3">
              <img
                src="@/assets/sample-product.jpg"
                alt="Product"
                class="rounded"
                width="60"
                height="60"
                style="object-fit: cover"
              />
              <span>Sample Product</span>
            </td> -->
            <td>₦5,000</td>
            <td>2</td>
            <td>₦10,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* You can add custom styling later if needed */
</style>
