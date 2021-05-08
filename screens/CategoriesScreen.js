import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/colors';
import { CATEGORIES } from '../data/dummyData';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        containerStyle={styles.gridItem}
        onPress={() =>
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          })
        }
        // Alternatively,
        // onPress={() => navigation.navigate({ routeName: 'CategoryMeals', params :{
        //   categoryId: itemData.item.id
        // } })}
      >
        <View>
          <Text style={{ ...styles.gridItemTitle, color: itemData.item.color }}>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
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
    textAlign: 'center',
  },
});
