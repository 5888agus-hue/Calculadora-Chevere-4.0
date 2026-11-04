
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, DimensionValue } from 'react-native';
import * as Haptics from 'expo-haptics';
import { colors } from '../styles/app-themes';

interface ButtonProps {
  label: string;
  onPress: () => void;
  type?: 'gray' | 'orange' | 'darkGray';
  width?: DimensionValue;
}

export const Button: React.FC<ButtonProps> = ({ label, onPress, type = 'gray', width = '22%' }) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'orange': return colors.btnOrange;
      case 'darkGray': return colors.btnDarkGray;
      default: return colors.btnGray;
    }
  };

  const getTextColor = () => {
    return type === 'orange' ? colors.btnOrangeText : colors.btnGrayText;
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: getBackgroundColor(), width }]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: getTextColor() }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginVertical: 6,
  },
  text: {
    fontSize: 26,
    fontWeight: '600',
  },
});