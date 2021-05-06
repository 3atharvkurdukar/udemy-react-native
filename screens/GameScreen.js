import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import colors from '../constants/colors';
import defaultStyles from '../constants/defaultStyles';
import MainButton from '../components/MainButton';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guesses, setGuesses] = useState([initialGuess]);
  const currentMin = useRef(1);
  const currentMax = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guesses.length);
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'higher' && currentGuess > userChoice)
    ) {
      Alert.alert('LIAR!!', 'Do not provide wrong hints', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentMax.current = currentGuess;
    } else if (direction === 'higher') {
      currentMin.current = currentGuess + 1;
    }
    const nextNum = generateRandomBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nextNum);
    setGuesses((guesses) => [nextNum, ...guesses]);
  };

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.body}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          color={colors.danger}
          onPress={nextGuessHandler.bind(this, 'lower')}
        >
          <Ionicons name="md-remove" />
        </MainButton>
        <MainButton
          color={colors.success}
          onPress={nextGuessHandler.bind(this, 'higher')}
        >
          <Ionicons name="md-add" />
        </MainButton>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {guesses.map((guess, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={defaultStyles.body}>{guesses.length - i}.</Text>
              <Text style={defaultStyles.body}>{guess}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
  list: {
    flex: 1,
    width: '50%',
  },
  listItem: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    shadowOffset: { width: 2, height: 4 },
    padding: 16,
    marginVertical: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
