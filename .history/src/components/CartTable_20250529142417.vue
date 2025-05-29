<script setup>
// Static cart row with product image from an online API
</script>

<template>
  <div class="cart-summary-container">
    <div class="cart-table-container">
      <div class="row justify-content-start">
        <div class="col-12 col-md-6">
          <div class="table-responsive">
            <table class="table align-middle text-center">
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
                  <td class="d-flex align-items-center">
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
  </div>
</template>

<style scoped>
.cart-summary-container {
  padding-inline: 30px;
  padding-block: 50px;
  background-color: #ffffff;
}
.cart-table-container .table-head th {
  background-color: #f9f1e7;
  font-weight: 400;
}
.cart-table-container table,
.cart-table-container th,
.cart-table-container td {
  border: none !important;
}
</style>
