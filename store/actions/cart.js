export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (productId, price, quantity) => {
  return {
    type: ADD_TO_CART,
    productId: productId,
    price: price,
    quantity: quantity,
  };
};
