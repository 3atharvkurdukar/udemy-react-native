import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Fonts from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

const fetchFonts = () => {
  return Fonts.loadAsync({
    'Rubik-400': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-600': require('./assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-700': require('./assets/fonts/Rubik-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setGuessRounds(0);
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (noOfRounds) => {
    setGuessRounds(noOfRounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess The Number" />
      {!userNumber ? (
        <StartGameScreen onStartGame={startGameHandler} />
      ) : guessRounds === 0 ? (
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
      ) : (
        <GameOverScreen
          rounds={guessRounds}
          userNumber={userNumber}
          onNewGame={newGameHandler}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
