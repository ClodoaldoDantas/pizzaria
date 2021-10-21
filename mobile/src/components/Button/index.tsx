import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../theme/colors';

interface ButtonProps extends RectButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <RectButton {...rest} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconWrapper}>
        <Feather name="check-square" size={24} color={colors.white} />
      </View>
    </RectButton>
  );
}
