import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      InterBlack: require('./assets/fonts/Inter-Black.ttf'),
      InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
      InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
      InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    });
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsNavigator />;
}
