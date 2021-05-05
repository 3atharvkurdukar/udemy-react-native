import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min));
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" color={colors.danger} onPress={() => {}} />
        <Button title="Higher" color={colors.success} onPress={() => {}} />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});
