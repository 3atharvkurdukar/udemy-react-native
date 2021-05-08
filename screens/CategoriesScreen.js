import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummyData';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() =>
        navigation.navigate('CategoryMeals', {
          categoryId: itemData.item.id,
        })
      }
    />
  );

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

export default CategoriesScreen;
