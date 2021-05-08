import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/colors';

const CategoryGridTile = ({ title, color, onSelect }) => {
  return (
    <TouchableOpacity
      containerStyle={styles.gridItemContainer}
      onPress={onSelect}
    >
      <View style={styles.gridItem}>
        <Text style={{ ...styles.gridItemTitle, color: color }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItemContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 12,
    shadowColor: 'white',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
  },
  gridItemTitle: {
    fontFamily: 'InterBold',
    fontSize: 22,
    textAlign: 'center',
  },
});

export default CategoryGridTile;
