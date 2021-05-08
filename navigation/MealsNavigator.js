import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import colors from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    cardStyle: {
      backgroundColor: colors.background,
    },
    headerStyle: {
      elevation: 0,
      backgroundColor: colors.background,
    },
    headerTintColor: colors.primary,
    headerTitleStyle: {
      fontFamily: 'InterSemiBold',
    },
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: 'Meal Categories',
      },
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen,
  },
  defaultStackNavOptions
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen,
  },
  defaultStackNavOptions
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        barStyle: {
          backgroundColor: colors.background,
        },
        activeColor: colors.primary,
        inactiveColor: 'grey',
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeBackgroundColor: colors.background,
          inactiveBackgroundColor: colors.background,
          activeTintColor: colors.primary,
          inactiveTintColor: 'grey',
        },
      });

export default createAppContainer(MealsFavTabNavigator);
