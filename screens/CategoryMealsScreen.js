import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
