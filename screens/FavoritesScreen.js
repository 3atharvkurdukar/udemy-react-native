import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummyData';
import CustomHeaderButton from '../components/HeaderButton';

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

FavoritesScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Favorite"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

export default FavoritesScreen;
