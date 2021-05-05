import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import defaultStyles from '../constants/defaultStyles';

const GameOverScreen = ({ rounds, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.body}>GAME OVER</Text>
      <Text style={defaultStyles.body}>No. of Rounds: {rounds}</Text>
      <Text style={defaultStyles.body}>The Number: {userNumber}</Text>
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
