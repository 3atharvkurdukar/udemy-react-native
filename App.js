import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalInput) => {
    setGoals((goals) => [
      ...goals,
      { _id: Date.now().toString(), value: goalInput },
    ]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((goals) => goals.filter((g) => g._id !== goalId));
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="+" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelGoalHandler}
      />
      <FlatList
        keyExtractor={(item) => item._id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem onDelete={deleteGoalHandler} item={itemData.item} />
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
});
