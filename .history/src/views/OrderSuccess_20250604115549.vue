<template>
  <div class="success-page">
    <h1>Order Successful 🎉</h1>
    <p>Your order has been placed successfully. Thank you for shopping with us!</p>
    <RouterLink to="/" class="go-home">Go back to Home</RouterLink>
  </div>
</template>

<style scoped>
.success-page {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin-top: 80px;
}
.go-home {
  margin-top: 20px;
  display: inline-block;
  background-color: #b88e2f;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
}
</style>
