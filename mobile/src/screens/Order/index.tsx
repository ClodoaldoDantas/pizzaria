import React, { useEffect, useMemo, useState } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useOrders } from '../../contexts/OrdersContext';
import { Container } from '../../components/Container';
import { Currency } from '../../components/Currency';
import { styles } from './styles';
import { orderLabels } from '../../utils/orderUtils';
import { fonts } from '../../theme/fonts';
import { colors } from '../../theme/colors';

type Params = {
  orderId: string;
};

export function Order() {
  const route = useRoute();
  const { orders } = useOrders();
  const { orderId } = route.params as Params;
  const order = orders.find(order => order._id === orderId);

  const [labels, setLabels] = useState<string[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);

  const stepIndicatorStyles = useMemo(
    () => ({
      labelFontFamily: fonts.regular,
      stepIndicatorLabelFontSize: 14,
      currentStepIndicatorLabelFontSize: 14,
      stepStrokeFinishedColor: colors.green_500,
      stepStrokeUnFinishedColor: colors.green_500,
      stepStrokeWidth: 0,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor:
        order?.status !== 'CANCELLED' ? colors.green_500 : colors.red_500,
      stepIndicatorFinishedColor: colors.green_500,
      stepIndicatorCurrentColor:
        order?.status !== 'CANCELLED' ? colors.white : colors.red_500,
      currentStepLabelColor:
        order?.status !== 'CANCELLED' ? colors.gray_500 : colors.red_500,
      stepIndicatorLabelCurrentColor:
        order?.status !== 'CANCELLED' ? colors.gray_500 : colors.white,
    }),
    [order]
  );

  useEffect(() => {
    if (order) {
      const labels = { ...orderLabels };
      delete labels[order.status !== 'CANCELLED' ? 'CANCELLED' : 'DONE'];

      const labelsArray = Object.values(labels);

      setLabels(labelsArray);
      setCurrentPosition(labelsArray.indexOf(labels[order.status]));
    }
  }, [order]);

  if (!order) {
    return null;
  }

  return (
    <Container>
      <Text style={styles.name}>Produto: {order.item.name}</Text>
      <Text style={styles.text}>Quantidade: {order.quantity}</Text>
      <Text style={styles.text}>
        Total: <Currency value={order.total} />
      </Text>

      <StepIndicator
        currentPosition={currentPosition}
        customStyles={stepIndicatorStyles}
        direction="vertical"
        stepCount={labels.length}
        labels={labels}
      />
    </Container>
  );
}
