import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

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

  return <View style={styles.screen}></View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
