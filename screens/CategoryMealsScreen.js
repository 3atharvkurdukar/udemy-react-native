import React from 'react';
import { StyleSheet, View } from 'react-native';
import MealList from '../components/MealList';
import { MEALS, CATEGORIES } from '../data/dummyData';

const CategoryMealsScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <MealList mealsData={displayedMeals} navigation={navigation} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    title: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;
