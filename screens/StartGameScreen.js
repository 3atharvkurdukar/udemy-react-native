import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput style={styles.inputBox} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={colors.danger} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={colors.success} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: colors.light,
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
  },
  inputBox: {
    width: '50%',
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    marginVertical: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {
    width: 100,
    borderRadius: 8,
  },
});

export default StartGameScreen;
