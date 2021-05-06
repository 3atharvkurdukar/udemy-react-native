import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import defaultStyles from '../constants/defaultStyles';

const GameOverScreen = ({ rounds, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.header}>GAME OVER</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://www.telegraph.co.uk/content/dam/Travel/ski/K2-mountain-Andrzej-Bargiel-first-ski-descent-by-Piotr-Pawlus-Red-Bull-Content-Pool.jpg',
          }}
        />
      </View>
      <Text style={defaultStyles.body}>
        No. of Rounds: <Text style={styles.highlight}>{rounds}</Text>
      </Text>
      <Text style={defaultStyles.body}>
        The Number: <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
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
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: 12,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'Rubik-700',
  },
});
