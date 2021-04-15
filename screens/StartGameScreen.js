import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>New Game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput style={styles.inputBox} />
        <View style={styles.buttonContainer}>
          <Button title="Reset" color="#f3232f" />
          <Button title="Confirm" color="#13d32f" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 24,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowRadius: 16,
    elevation: 8,
    padding: 16,
    borderRadius: 8,
  },
  inputBox: {
    width: '50%',
    borderBottomColor: '#119fee',
    borderBottomWidth: 2,
    marginVertical: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});

export default StartGameScreen;
