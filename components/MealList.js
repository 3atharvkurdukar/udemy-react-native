import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from './MealItem';

const MealList = ({ mealsData, navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        meal={itemData.item}
        onSelectMeal={() =>
          navigation.navigate('MealDetails', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
          })
        }
      />
    );
  };

  return (
    <FlatList
      data={mealsData}
      renderItem={renderMealItem}
      style={styles.mealList}
    />
  );
};

export default MealList;

const styles = StyleSheet.create({
  mealList: {
    width: '100%',
    paddingHorizontal: 16,
  },
});
