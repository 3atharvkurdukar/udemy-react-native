import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CartItem = ({ item, onDelete, onViewDetails, onChangeQuantity }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        containerStyle={styles.imageContainer}
        onPress={onViewDetails}
        activeOpacity={0.8}
      >
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          ${item.price.toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
        containerStyle={styles.deleteBtnContainer}
        onPress={onDelete}
      >
        <Ionicons
          size={24}
          name="trash"
          color={colors.accent}
          backgroundColor="transparent"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  image: {
    width: '100%',
    height: 64,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: colors.darkText,
  },
  price: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: colors.primary,
  },
  imageContainer: {
    width: '20%',
  },
  infoContainer: {
    width: '70%',
    paddingHorizontal: 12,
  },
  deleteBtnContainer: {
    width: '10%',
    alignItems: 'flex-end',
  },
});
