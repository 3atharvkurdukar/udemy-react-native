import React, { useState } from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = () => {
  const [value, setValue] = useState('');

  const numberInputHandler = (inputText) => {
    setValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            autoCapitalise="none"
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={value}
          />
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
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: 'center',
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
