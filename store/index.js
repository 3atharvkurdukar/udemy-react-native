import { combineReducers, createStore } from 'redux';
import { mealsReducer } from './reducers';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default store;
