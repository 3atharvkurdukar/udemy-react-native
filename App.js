import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalInput) => {
    setGoals((goals) => [
      ...goals,
      { _id: Date.now().toString(), value: goalInput },
    ]);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((goals) => goals.filter((g) => g._id !== goalId));
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
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
