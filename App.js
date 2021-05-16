import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import { Provider } from 'react-redux';
import ShopNavigator from './navigation/ShopNavigator';
import store from './store';

const customFonts = {
  'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
};

export default function App() {
  const [fontLoaded] = useFonts(customFonts);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
