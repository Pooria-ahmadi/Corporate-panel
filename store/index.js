export const state = () => ({
  cart: []
})

export const mutations = {
  addtoproducts(state, card) {
    const productInCart = state.cart.find(item => item.title === card.title);
    if (productInCart) {
      productInCart.quantity += card.quantity;
    } else {
      state.cart.push(card);
    }
  },
  incrementproductsqty(state, index) {
    state.cart[index].quantity++;
  },
  decrementproductsqty(state, index) {
    if (state.cart[index].quantity > 0) {
      state.cart[index].quantity--;
    }
  },
  remove_from_products(state, index) {
    state.cart.splice(index, 1);
  },
  clear_basket(state) {
    state.cart = [];
  }
}

export const getters = {
  cartItems: (state) => state.cart,
  cartItemCount: (state) => state.cart.length
}
