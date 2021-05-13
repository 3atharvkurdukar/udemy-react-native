import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';

const MealDetailsScreen = ({ navigation }) => {
  const meals = useSelector((state) => state.meals.meals);
  const mealId = navigation.getParam('mealId');
  const meal = meals.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.mealImg} />
      <View style={styles.mealDetails}>
        <DefaultText>{meal.duration} min</DefaultText>
        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
      </View>
      <View style={styles.mealInfo}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.subheader}>Ingredients</Text>
        <View style={styles.list}>
          {meal.ingredients.map((ing, i) => (
            <DefaultText key={i} style={styles.listItem}>
              {ing}
            </DefaultText>
          ))}
        </View>
        <Text style={styles.subheader}>Steps</Text>
        <View style={styles.list}>
          {meal.steps.map((step, i) => (
            <DefaultText key={i} style={styles.listItem}>
              {step}
            </DefaultText>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const mealTitle = navigation.getParam('mealTitle');

  return {
    title: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log('Mark as Favorite')}
        />
      </HeaderButtons>
    ),
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
  mealDetails: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
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
    fontSize: 18,
  },
});

export default MealDetailsScreen;
