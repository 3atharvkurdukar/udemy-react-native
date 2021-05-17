import PRODUCTS from '../../data/dummy-data';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';

const initialState = {
  items: {},
  totalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.hasOwnProperty(action.productId)) {
        return {
          ...state,
          items: {
            ...state.items,
            [action.productId]: state.items[action.productId] + action.quantity,
          },
          totalAmount: state.totalAmount + action.price * action.quantity,
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [action.productId]: action.quantity,
        },
        totalAmount: state.totalAmount + action.price * action.quantity,
      };
    case REMOVE_FROM_CART:
      if (state.items.hasOwnProperty(action.productId)) {
        const updatedItems = { ...state.items };
        delete updatedItems[action.productId];
        return {
          ...state,
          items: updatedItems,
          totalAmount: state.totalAmount - action.price * action.quantity || 0,
        };
      }
      return state;
    default:
      return state;
  }
};
