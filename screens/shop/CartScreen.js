import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import defaultStyles from '../../constants/defaultStyles';

const CartScreen = () => {
  const items = useSelector((state) => state.cart.items);
  const cartItems = useSelector((state) =>
    state.products.availableProducts
      .filter((prod) => Object.keys(items).includes(prod.id))
      .map((prod) => ({
        ...prod,
        quantity: items[prod.id],
      }))
  );
  return (
    <View style={defaultStyles.screen}>
      <FlatList
        style={styles.itemList}
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemList: {
    width: '100%',
  },
});

export default CartScreen;
