import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Currency } from '../../components/Currency';
import { Button } from '../../components/Button';
import { styles } from './styles';

export function Product() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: 'https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png',
          }}
        />

        <View style={styles.cardInfo}>
          <Text style={styles.name}>Ao Molho</Text>
          <Text style={styles.description}>
            Macarrão ao molho branco, fughi e cheiro verde das montanhas.
          </Text>
          <Currency value={19.9} fontSize={20} />
        </View>
      </View>

      <View>
        <Text style={styles.footerTitle}>Total do pedido</Text>

        <View style={styles.footerContent}>
          <Currency value={44.8} fontSize={24} />

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={[
                styles.quantityItem,
                { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 },
              ]}
            >
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>

            <View style={styles.quantityItem}>
              <Text style={styles.quantityText}>2</Text>
            </View>

            <TouchableOpacity
              style={[
                styles.quantityItem,
                { borderTopRightRadius: 5, borderBottomRightRadius: 5 },
              ]}
            >
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Confirmar Pedido" />
      </View>
    </SafeAreaView>
  );
}
