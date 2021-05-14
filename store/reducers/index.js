import { MEALS } from '../../data/dummyData';
import { TOGGLE_FAVORITE } from '../actions';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingId = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingId >= 0) {
        const updatdFavMeals = [...state.favoriteMeals];
        updatdFavMeals.splice(existingId, 1);
        return {
          ...state,
          favoriteMeals: updatdFavMeals,
        };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    default:
      return state;
  }
};
