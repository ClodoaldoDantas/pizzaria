import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  card: {
    marginBottom: 'auto',
  },
  cardInfo: {
    width: '100%',
    padding: 24,
    backgroundColor: colors.gray_100,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  name: {
    fontFamily: fonts.semiBold,
    fontSize: 20,
    color: colors.gray_500,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: 15,
    marginBottom: 5,
  },
  footerTitle: {
    fontFamily: fonts.semiBold,
    color: colors.gray_500,
    fontSize: 20,
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  quantityContainer: {
    flexDirection: 'row',
  },
  quantityItem: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray_100,
  },
  quantityText: {
    fontSize: 15,
    fontFamily: fonts.medium,
    color: '#6C6C80',
  },
});
