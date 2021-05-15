import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import defaultStyles from '../../constants/defaultStyles';

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <View style={defaultStyles.screen}>
      <FlatList
        data={products}
        renderItem={(itemData) => <ProductItem item={itemData.item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
};

export default ProductsOverviewScreen;
