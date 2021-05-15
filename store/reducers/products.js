import PRODUCTS from '../../data/dummy-data';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === 'u1'),
};

export const productsReducer = (state = initialState, action) => {
  switch (action.types) {
    default:
      return state;
  }
};
