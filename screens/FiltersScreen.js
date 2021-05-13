import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import FilterSwitch from '../components/FilterSwitch';
import CustomHeaderButton from '../components/HeaderButton';

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onChange={(newVal) => setIsGlutenFree(newVal)}
      />
      <FilterSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onChange={(newVal) => setIsLactoseFree(newVal)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={(newVal) => setIsVegetarian(newVal)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={(newVal) => setIsVegan(newVal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: 'white',
    fontFamily: 'InterSemiBold',
    fontSize: 24,
    marginVertical: 24,
  },
});

FiltersScreen.navigationOptions = ({ navigation }) => ({
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

export default FiltersScreen;
