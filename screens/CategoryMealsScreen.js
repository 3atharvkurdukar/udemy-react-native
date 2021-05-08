import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import colors from '../constants/colors';
import { CATEGORIES } from '../data/dummyData';

const CategoryMealsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="View Meal Details"
        onPress={() => navigation.navigate('MealDetails')} // Works everywhere
        // onPress={() => navigation.push('MealDetails')}  // Works with stack navigator
      />
      <Button
        title="Back"
        onPress={() => navigation.goBack()} // Works everywhere
        // onPress={() => navigation.pop()} // Works with stack navigator
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    title: selectedCategory.title,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      fontFamily: 'InterSemiBold',
    },
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
