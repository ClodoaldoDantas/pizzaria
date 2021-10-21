import React from 'react';
import NumberFormat from 'react-number-format';
import { Text } from 'react-native';
import { styles } from './styles';

type CurrencyProps = {
  value: number;
};

export function Currency({ value }: CurrencyProps) {
  return (
    <NumberFormat
      value={value}
      displayType="text"
      thousandSeparator={true}
      prefix={'R$'}
      renderText={formattedValue => (
        <Text style={styles.price}>{formattedValue}</Text>
      )}
    />
  );
}
