import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/HeaderButton';

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (!favMeals || favMeals?.length === 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.error}>
          No favorites found.{'\n'}
          Try adding some!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <MealList mealsData={favMeals} navigation={navigation} />
    </View>
  );
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
