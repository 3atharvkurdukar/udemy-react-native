import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import colors from '../constants/colors';
import DefaultText from './DefaultText';

const FilterSwitch = ({ label, value, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{label}</DefaultText>
      <Switch
        trackColor={{ false: 'darkgrey', true: colors.primary }}
        thumbColor={colors.primary}
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
};

export default FilterSwitch;

const styles = StyleSheet.create({
  filterContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
});
