import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import defaultStyles from '../../constants/defaultStyles';

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <View style={defaultStyles.screen}>
      <FlatList
        data={products}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
      />
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
