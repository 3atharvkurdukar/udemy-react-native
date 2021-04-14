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
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              color="#1B3BDB"
              title="ADD"
              onPress={addGoal}
              disabled={goalInput.length === 0}
            />
          </View>
          <View style={styles.button}>
            <Button color="#de2534" title="CANCEL" onPress={onCancelGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textInput: {
    borderBottomColor: '#525aff',
    borderBottomWidth: 2,
    width: '100%',
    marginBottom: 16,
    padding: 8,
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export default GoalInput;
