//pinia allows us to create plugins.
//this plugin receives the store object which gives access to everything in the store
export function localStoragePlugin({ store }) {
  // retrieve saved cart from localStorage if there is any(stored as a string)
  const savedCart = localStorage.getItem('cartItems')
  // checking if there's any data in the local storage
  if (savedCart && store.$id === 'cart') {
    //if there's any saved data, load it back into the store as an array
    store.cartItems = JSON.parse(savedCart)
  }

  // Watch for changes to cartItems and save to localStorage
  store.$subscribe((mutation, state) => {
    if (store.$id === 'cart') {
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }
  })
}
