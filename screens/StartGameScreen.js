import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Game Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StartGameScreen;
