import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/HeaderButton';
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

CategoriesScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Favorite"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

export default CategoriesScreen;
