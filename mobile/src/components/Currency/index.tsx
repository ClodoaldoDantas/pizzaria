import React from 'react';
import NumberFormat from 'react-number-format';
import { Text } from 'react-native';
import { styles } from './styles';

type CurrencyProps = {
  value: number;
  fontSize?: number;
};

export function Currency({ value, fontSize = 16 }: CurrencyProps) {
  return (
    <NumberFormat
      value={value}
      displayType="text"
      thousandSeparator={true}
      prefix={'R$'}
      renderText={formattedValue => (
        <Text style={[styles.price, { fontSize }]}>{formattedValue}</Text>
      )}
    />
  );
}
