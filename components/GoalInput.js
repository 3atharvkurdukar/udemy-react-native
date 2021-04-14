import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = (text) => {
    setGoalInput(text);
  };

  const addGoal = () => {
    onAddGoal(goalInput);
    setGoalInput('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        value={goalInput}
        onChangeText={goalInputHandler}
      />
      <Button title="ADD" onPress={addGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  textInput: {
    borderBottomColor: '#e2eaf4',
    borderBottomWidth: 2,
    width: '80%',
    padding: 4,
  },
});

export default GoalInput;
