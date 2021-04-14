import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoalInput(text);
  };

  const addGoalHandler = () => {
    setGoals((goals) => [...goals, goalInput]);
    setGoalInput('');
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          value={goalInput}
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" style={styles.addButton} onPress={addGoalHandler} />
      </View>
      <View>
        {goals.map((goal, i) => (
          <Text key={i}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderBottomColor: '#e2eaf4',
    borderBottomWidth: 2,
    width: '80%',
    padding: 4,
  },
  addButton: { width: '20%' },
});
