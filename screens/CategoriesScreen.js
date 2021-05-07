import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummyData';

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      <Text style={{ ...styles.gridItemTitle, color: itemData.item.color }}>
        {itemData.item.title}
      </Text>
    </View>
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: 'black',
    shadowOpacity: 0.24,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
  },
  gridItemTitle: {
    fontFamily: 'InterBold',
    fontSize: 22,
  },
});
