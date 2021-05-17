export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (productId, price, quantity) => {
  return {
    type: ADD_TO_CART,
    productId: productId,
    price: price,
    quantity: quantity,
  };
};

export const removeFromCart = (productId, price, quantity) => {
  return {
    type: REMOVE_FROM_CART,
    productId: productId,
    price: price,
    quantity: quantity,
  };
};
