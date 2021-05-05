import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: '15%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Nunito-600',
  },
});

export default Header;
