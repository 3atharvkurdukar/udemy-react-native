import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import FilterSwitch from '../components/FilterSwitch';
import CustomHeaderButton from '../components/HeaderButton';
import { setFilters } from '../store/actions';

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree: isGlutenFree,
      isLactoseFree: isLactoseFree,
      isVegan: isVegan,
      isVegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

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
        label="Vegan"
        value={isVegan}
        onChange={(newVal) => setIsVegan(newVal)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={(newVal) => setIsVegetarian(newVal)}
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
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Favorite"
        iconName="ios-save"
        onPress={navigation.getParam('save')}
      />
    </HeaderButtons>
  ),
});

export default FiltersScreen;
