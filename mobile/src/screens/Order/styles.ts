import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  name: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.gray_500,
  },
  quantity: {
    fontFamily: fonts.regular,
    fontSize: 14,
  },
});
