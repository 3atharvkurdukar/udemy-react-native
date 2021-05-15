import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View></View>
    </Provider>
  );
}
