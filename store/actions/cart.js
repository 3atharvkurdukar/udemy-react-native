export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (productId, qty) => {
  console.log('Added!');
  return { type: ADD_TO_CART, productId: productId, quantity: qty };
};
