import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Display } from '../components/Display';
import { Keypad } from '../components/Keypad';
import { colors } from '../styles/app-themes';
import { useCalculator } from '../hooks/useCalculator';

export default function CalculatorScreen() {
  const { displayValue, formula, handleButtonPress } = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Display value={displayValue} formula={formula} />
      <Keypad onPressButton={handleButtonPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    padding: 16,
  },
});