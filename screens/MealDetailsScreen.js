import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealDetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
