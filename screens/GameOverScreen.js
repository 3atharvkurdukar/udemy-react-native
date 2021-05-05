import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

const GameOverScreen = ({ rounds, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text>GAME OVER</Text>
      <Text>No. of Rounds: {rounds}</Text>
      <Text>The Number: {userNumber}</Text>
      <Button title="New Game" onPress={onNewGame} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light,
  },
});
