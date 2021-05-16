import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import defaultStyles from '../../constants/defaultStyles';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <View style={defaultStyles.screen}>
      <FlatList
        style={styles.productList}
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            item={itemData.item}
            onViewDetails={() => {
              navigation.navigate('ProductDetails', {
                prodId: itemData.item.id,
                prodTitle: itemData.item.title,
              });
            }}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  productList: {
    width: '100%',
  },
});

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
};

export default ProductsOverviewScreen;
