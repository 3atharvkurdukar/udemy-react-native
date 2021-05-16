import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/colors';
import defaultStyles from '../../constants/defaultStyles';

const ProductDetailsScreen = ({ navigation }) => {
  const productId = navigation.getParam('prodId');
  const product = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <View style={{ ...defaultStyles.screen, paddingHorizontal: 0 }}>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.header}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
        </View>
        <View>
          <Text style={styles.price} numberOfLines={1}>
            ${product.price}
          </Text>
        </View>
      </View>
      <ScrollView containerStyle={styles.descriptionContainer}>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      <View style={styles.action}>
        <TouchableOpacity containerStyle={styles.cartBtn}>
          <Ionicons style={styles.cartIcon} name="cart-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 16,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    padding: 16,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: colors.darkText,
  },
  price: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
  },
  descriptionContainer: {
    height: '20%',
    width: '100%',
  },
  description: {
    padding: 16,
    fontSize: 16,
    color: colors.grey,
    fontFamily: 'Poppins-Regular',
  },
  action: {
    width: '100%',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cartBtn: {
    backgroundColor: colors.primary,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    // elevation: 8,
  },
  cartIcon: {
    color: 'white',
    fontSize: 32,
  },
});

ProductDetailsScreen.navigationOptions = ({ navigation }) => {
  const productTitle = navigation.getParam('prodTitle');
  return {
    headerTransparent: true,
    headerTitle: '',
    headerBackTitleStyle: {
      backgroundColor: colors.grey,
    },
  };
};

export default ProductDetailsScreen;
