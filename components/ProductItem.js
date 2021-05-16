import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductItem = ({ item, onAddToCart, onViewDetails }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onViewDetails} activeOpacity={0.8}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
      </TouchableOpacity>
      <View style={styles.itemInfo}>
        <TouchableOpacity onPress={onViewDetails}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            ${item.price.toFixed(2)}
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={onAddToCart}>
            <Ionicons
              style={styles.cart}
              size={24}
              name="cart-outline"
              color={colors.accent}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 12,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: colors.darkText,
  },
  price: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
  },
  itemInfo: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
