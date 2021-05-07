import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryMealsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
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
