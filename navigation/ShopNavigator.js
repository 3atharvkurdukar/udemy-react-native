import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import colors from '../constants/colors';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.background,
        elevation: 0,
        borderBottomWidth: 0,
        shadowRadius: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center',
      headerTintColor: colors.darkText,
      cardStyle: {
        backgroundColor: colors.background,
      },
    },
  }
);

export default createAppContainer(ProductsNavigator);
