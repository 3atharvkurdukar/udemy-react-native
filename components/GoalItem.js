import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GoalItem = ({ item, onDelete }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, item._id)}>
    <View style={styles.listItem}>
      <Text>{item.value}</Text>
    </View>
  </TouchableOpacity>
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
