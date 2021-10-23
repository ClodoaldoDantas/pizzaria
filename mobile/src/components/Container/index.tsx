import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
