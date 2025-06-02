export function localStoragePlugin({ store }) {
  // Load saved cart from localStorage on first load
  const savedCart = localStorage.getItem('cartItems')
  if (savedCart && store.$id === 'cart') {
    store.cartItems = JSON.parse(savedCart)
  }

  // Watch for changes to cartItems and save to localStorage
  store.$subscribe((mutation, state) => {
    if (store.$id === 'cart') {
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }
  })
}
