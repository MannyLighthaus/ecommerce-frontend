<template>
  <div class="success-page">
    <h1>Order Successful 🎉</h1>
    <p>Your order has been placed successfully. Thank you for shopping with us!</p>
    <RouterLink to="/" class="go-home">Go back to Home</RouterLink>
  </div>
</template>

<style scoped>
.success-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* full viewport height */
  text-align: center;
  padding: 0 16px;
  box-sizing: border-box;
}

.go-home {
  margin-top: 20px;
  background-color: #b88e2f;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
}

.go-home:hover {
  background-color: #a27820;
}
</style>
