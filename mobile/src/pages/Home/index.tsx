import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <Text>Ir para tela de produto</Text>
      </TouchableOpacity>
    </View>
  );
}
