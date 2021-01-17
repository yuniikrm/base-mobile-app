import { StyleSheet } from 'react-native';
import { buttonPrimary, colors } from '../../../styles';

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 14,
    height: 48,
    borderRadius: 8,
  },
  titleStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
    alignSelf: 'center',
  },
  buttonSecondaryContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    height: 48,
    padding: 2,
    width: '100%',
  },
  buttonSecondaryStyle: {
    height: 44,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  titleSecondaryStyle: {
    position: 'absolute',
    fontSize: 16,
    textAlign: 'center',
    color: colors.gradient,
    alignSelf: 'center',
  },
});

export {
  styles,
  colors,
};
