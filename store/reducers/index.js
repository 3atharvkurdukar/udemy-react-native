import { MEALS } from '../../data/dummyData';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions';

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
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals: filteredMeals,
      };
    default:
      return state;
  }
};
