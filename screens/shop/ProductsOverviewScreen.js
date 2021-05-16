import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProductItem from '../../components/ProductItem';
import defaultStyles from '../../constants/defaultStyles';
import { addToCart } from '../../store/actions/cart';
import CustomHeaderButton from '../../components/HeaderButton';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <View style={defaultStyles.screen}>
      <FlatList
        style={styles.productList}
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            onViewDetails={() => {
              navigation.navigate('ProductDetails', {
                prodId: item.id,
                prodTitle: item.title,
              });
            }}
            onAddToCart={() => {
              dispatch(addToCart(item.id, item.price, 1));
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

ProductsOverviewScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'All Products',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="cart"
          onPress={() => {
            navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductsOverviewScreen;
