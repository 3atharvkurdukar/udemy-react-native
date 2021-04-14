import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ item }) => (
  <View style={styles.listItem}>
    <Text>{item.value}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
});

export default GoalItem;
