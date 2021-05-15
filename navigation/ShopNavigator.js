import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import colors from '../constants/colors';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.background,
        elevation: 0,
      },
      headerTitleAlign: 'center',
      headerTintColor: colors.primary,
      cardStyle: {
        backgroundColor: colors.background,
      },
    },
  }
);

export default createAppContainer(ProductsNavigator);
