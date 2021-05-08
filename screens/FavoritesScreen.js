import React from 'react';
import { StyleSheet, View } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummyData';

const FavoritesScreen = ({ navigation }) => {
  const mealIds = ['m1', 'm3', 'm4'];

  const displayedMeals = MEALS.filter((meal) => mealIds.indexOf(meal.id) >= 0);

  return (
    <View style={styles.screen}>
      <MealList mealsData={displayedMeals} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
