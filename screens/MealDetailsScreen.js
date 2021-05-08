import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../constants/colors';
import { MEALS } from '../data/dummyData';

const MealDetailsScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.mealImg} />
      <View style={styles.mealInfo}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.subheader}>Ingredients</Text>
        <View style={styles.list}>
          {meal.ingredients.map((ing, i) => (
            <Text key={i} style={styles.listItem}>
              {ing}
            </Text>
          ))}
        </View>
        <Text style={styles.subheader}>Steps</Text>
        <View style={styles.list}>
          {meal.steps.map((step, i) => (
            <Text key={i} style={styles.listItem}>
              {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const meal = MEALS.find((meal) => meal.id === mealId);

  return {
    title: meal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mealImg: {
    width: '100%',
    height: 250,
  },
  mealInfo: {
    width: '100%',
    padding: 16,
  },
  title: {
    color: colors.primary,
    fontFamily: 'InterBold',
    fontSize: 24,
    marginBottom: 12,
  },
  subheader: {
    color: 'white',
    fontFamily: 'InterSemiBold',
    fontSize: 20,
    marginBottom: 6,
  },
  list: {
    paddingLeft: 12,
    marginBottom: 12,
  },
  listItem: {
    color: 'lightgrey',
    fontFamily: 'InterRegular',
    fontSize: 18,
  },
});

export default MealDetailsScreen;
