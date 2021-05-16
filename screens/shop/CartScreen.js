import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import colors from '../../constants/colors';
import defaultStyles from '../../constants/defaultStyles';

const CartScreen = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
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
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
        <TouchableOpacity containerStyle={styles.checkoutBtnContainer}>
          <Text style={styles.checkoutBtn}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemList: {
    width: '100%',
    height: '90%',
  },
  totalContainer: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  total: {
    fontFamily: 'Poppins-Bold',
    color: colors.darkText,
    fontSize: 20,
    paddingVertical: 8,
  },
  checkoutBtnContainer: {
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  checkoutBtn: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 20,
  },
});

export default CartScreen;
