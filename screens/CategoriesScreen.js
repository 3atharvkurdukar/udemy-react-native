import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => navigation.navigate('CategoryMeals')} // Pushes the given screen into the stack
        // onPress={() => navigation.replace('CategoryMeals')} // Replaces current screen with given
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
