import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  cartEmptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartEmptyTitle: {
    fontFamily: fonts.regular,
    color: colors.gray_500,
    fontSize: 16,
    marginTop: 8,
  },
});
