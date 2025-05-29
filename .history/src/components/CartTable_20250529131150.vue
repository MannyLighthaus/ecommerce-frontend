<script setup>
// Static cart row with product image from an online API
</script>

<template>
  <div class="container my-4">
    <div class="row justify-content-sta">
      <div class="col-12 col-md-6">
        <div class="table-responsive">
          <table class="table table-bordered align-middle text-center">
            <thead class="table-head">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="d-flex align-items-center gap-3">
                  <img
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                    alt="Product"
                    class="rounded"
                    width="40"
                    height="40"
                    style="object-fit: cover"
                  />
                  <span>Fjallraven Backpack</span>
                </td>
                <td>₦8,500</td>
                <td>1</td>
                <td>₦8,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-head {
  color: red;
}
</style>
