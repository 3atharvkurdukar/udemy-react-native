import { MEALS } from '../../data/dummyData';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsReducer = (state = initialState, action) => {
  return state;
};
