import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [goalInput, setGoalInput] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoalInput(text);
  };

  const addGoalHandler = () => {
    // FlatList automatically detects 'key' or 'id' property as key for each item
    setGoals((goals) => [
      ...goals,
      { _id: Date.now().toString(), value: goalInput },
    ]);
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
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item) => item._id}
        data={goals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
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
  listItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
});
