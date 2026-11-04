import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/app-themes';

interface DisplayProps {
  value: string;
  formula: string;
}

export const Display: React.FC<DisplayProps> = ({ value, formula }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.formulaText} numberOfLines={1}>{formula}</Text>
      <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.displayBackground,
    height: 160,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
  },
  formulaText: {
    color: colors.textSecondary,
    fontSize: 20,
    marginBottom: 4,
  },
  displayText: {
    color: colors.textPrimary,
    fontSize: 56,
    fontWeight: '300',
  },
});