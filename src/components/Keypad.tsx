import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './Button';

interface KeypadProps {
  onPressButton: (value: string) => void;
}

export const Keypad: React.FC<KeypadProps> = ({ onPressButton }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button label="C" type="darkGray" onPress={() => onPressButton('C')} />
        <Button label="±" type="darkGray" onPress={() => onPressButton('±')} />
        <Button label="%" type="darkGray" onPress={() => onPressButton('%')} />
        <Button label="÷" type="orange" onPress={() => onPressButton('÷')} />
      </View>
      <View style={styles.row}>
        <Button label="7" onPress={() => onPressButton('7')} />
        <Button label="8" onPress={() => onPressButton('8')} />
        <Button label="9" onPress={() => onPressButton('9')} />
        <Button label="×" type="orange" onPress={() => onPressButton('×')} />
      </View>
      <View style={styles.row}>
        <Button label="4" onPress={() => onPressButton('4')} />
        <Button label="5" onPress={() => onPressButton('5')} />
        <Button label="6" onPress={() => onPressButton('6')} />
        <Button label="-" type="orange" onPress={() => onPressButton('-')} />
      </View>
      <View style={styles.row}>
        <Button label="1" onPress={() => onPressButton('1')} />
        <Button label="2" onPress={() => onPressButton('2')} />
        <Button label="3" onPress={() => onPressButton('3')} />
        <Button label="+" type="orange" onPress={() => onPressButton('+')} />
      </View>
      <View style={styles.row}>
        <Button label="0" width="48%" onPress={() => onPressButton('0')} />
        <Button label="." onPress={() => onPressButton('.')} />
        <Button label="=" type="orange" onPress={() => onPressButton('=')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
});