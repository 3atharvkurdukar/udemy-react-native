import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

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
