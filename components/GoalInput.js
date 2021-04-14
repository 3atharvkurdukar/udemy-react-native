import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancelGoal }) => {
  const [goalInput, setGoalInput] = useState('');

  const goalInputHandler = (text) => {
    setGoalInput(text);
  };

  const addGoal = () => {
    onAddGoal(goalInput);
    setGoalInput('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          value={goalInput}
          onChangeText={goalInputHandler}
        />
        <Button color="#1B3BDB" title="ADD" onPress={addGoal} />
        <Button color="#de2534" title="CANCEL" onPress={onCancelGoal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  textInput: {
    borderBottomColor: '#e2eaf4',
    borderBottomWidth: 2,
    width: '80%',
    marginBottom: 16,
    padding: 4,
  },
});

export default GoalInput;
