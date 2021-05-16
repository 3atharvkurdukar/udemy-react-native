import PRODUCTS from '../../data/dummy-data';
import { ADD_TO_CART } from '../actions/cart';

const initialState = {
  items: {},
  totalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId, quantity } = action;
      const existingItem = state.items[productId];
      if (!!existingItem) {
        return {
          ...state,
          items: {
            ...state.items,
            [productId]: state.items[productId] + quantity,
          },
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [productId]: quantity,
        },
      };
    default:
      return state;
  }
};