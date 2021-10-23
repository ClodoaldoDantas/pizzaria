import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16,
  },
  image: {
    width: 114,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  productInfo: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.gray_100,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  name: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.gray_500,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 12,
    marginBottom: 5,
  },
});
