import { colors } from '../theme/colors';

export const orderLabels = {
  PENDING: 'Pendente',
  PREPARING: 'Preparando',
  DONE: 'Entregue',
  CANCELLED: 'Cancelado',
};

export const orderVariants = {
  PENDING: colors.gray_300,
  PREPARING: colors.yellow_500,
  DONE: colors.green_500,
  CANCELLED: colors.red_500,
};
