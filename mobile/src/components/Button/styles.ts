import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: colors.green_500,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    color: colors.white,
    flex: 1,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    backgroundColor: colors.green_300,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
