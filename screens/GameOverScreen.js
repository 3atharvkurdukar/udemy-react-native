import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import defaultStyles from '../constants/defaultStyles';

const GameOverScreen = ({ rounds, userNumber, onNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.header}>GAME OVER</Text>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require('../assets/success.png')} />
      </View>
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
});
