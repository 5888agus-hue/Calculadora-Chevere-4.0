import { useState } from 'react';

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [formula, setFormula] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  const clear = () => {
    setDisplayValue('0');
    setFormula('');
    setHasError(false);
    setIsCalculated(false);
  };

  const inputNumber = (num: string) => {
    if (hasError) clear();

    if (isCalculated) {
      setDisplayValue(num);
      setFormula('');
      setIsCalculated(false);
      return;
    }

    setDisplayValue(displayValue === '0' ? num : displayValue + num);
  };

  const inputDot = () => {
    if (hasError) clear();
    if (isCalculated) {
      setDisplayValue('0.');
      setFormula('');
      setIsCalculated(false);
      return;
    }

    const parts = displayValue.split(/[\+\-\×\÷]/);
    const currentNumber = parts[parts.length - 1];
    
    if (!currentNumber.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const toggleSign = () => {
    if (hasError || isCalculated) return;
  };

  const percentage = () => {
    if (hasError || isCalculated) return;
  };

  const handleOperator = (operator: string) => {
    if (hasError) return;

    if (isCalculated) {
      setIsCalculated(false);
      setFormula('');
    }

    const lastChar = displayValue.trim().slice(-1);
    if (['+', '-', '×', '÷'].includes(lastChar)) {
      setDisplayValue(displayValue.trim().slice(0, -1) + ` ${operator} `);
      return;
    }

    setDisplayValue(displayValue === '0' ? `${operator} ` : `${displayValue} ${operator} `);
  };

  const evaluateExpression = (expr: string): number => {
    const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/');
    
    if (/\/ 0(\.0+)?(\s|$)/.test(sanitized)) {
      throw new Error('Math Error');
    }

    try {
      const result = Function(`'use strict'; return (${sanitized})`)();
      if (!isFinite(result)) {
        throw new Error('Math Error');
      }
      return result;
    } catch {
      throw new Error('Syntax Error');
    }
  };

  const calculate = () => {
    if (hasError || isCalculated) return;

    try {
      const result = evaluateExpression(displayValue);
      const formattedResult = Number.isInteger(result) ? String(result) : String(parseFloat(result.toFixed(8)));

      setFormula(displayValue + ' =');
      setDisplayValue(formattedResult);
      setIsCalculated(true);
    } catch (error: any) {
      setFormula(displayValue);
      setDisplayValue(error.message || 'Syntax Error');
      setHasError(true);
    }
  };

  const handleButtonPress = (value: string) => {
    switch (value) {
      case 'C':
        clear();
        break;
      case '±':
        toggleSign();
        break;
      case '%':
        percentage();
        break;
      case '.':
        inputDot();
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        handleOperator(value);
        break;
      case '=':
        calculate();
        break;
      default:
        if (!isNaN(Number(value))) {
          inputNumber(value);
        }
        break;
    }
  };

  return {
    displayValue,
    formula,
    handleButtonPress,
  };
};