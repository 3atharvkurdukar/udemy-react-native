import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen</Text>
      <Button
        title="Back to Categories"
        onPress={() => navigation.popToTop()} // Works with stack navigator
      />
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
