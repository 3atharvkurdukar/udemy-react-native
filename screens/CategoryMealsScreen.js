import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummyData';

const CategoryMealsScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const categoryId = navigation.getParam('categoryId');

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (!displayedMeals || displayedMeals?.length === 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.error}>No meals found!</Text>
      </View>
    );
  }

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
  error: {
    color: 'lightgrey',
    fontFamily: 'InterSemiBold',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

export default CategoryMealsScreen;
