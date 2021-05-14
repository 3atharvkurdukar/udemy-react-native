import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = ({ mealsData, navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <MealItem
        meal={itemData.item}
        onSelectMeal={() =>
          navigation.navigate('MealDetails', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFavorite: isFavorite,
          })
        }
      />
    );
  };

  return (
    <FlatList
      data={mealsData}
      renderItem={renderMealItem}
      style={styles.mealList}
    />
  );
};

export default MealList;

const styles = StyleSheet.create({
  mealList: {
    width: '100%',
    paddingHorizontal: 16,
  },
});
