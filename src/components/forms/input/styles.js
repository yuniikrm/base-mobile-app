import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
  inputContainerStyle: {
    height: 45,
    borderColor: colors.lavenderGrey,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginLeft: -10,
    marginRight: -10,
    marginBottom: -10,
  },
  inputContainerStyleError: {
    height: 45,
    borderColor: colors.red,
    backgroundColor: colors.pink,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginLeft: -10,
    marginRight: -10,
    marginBottom: -10,
  },
  inputStyle: {
    fontSize: 14,
  },
  label: {
    marginBottom: 2,
  },
  container: {
    width: '100%',
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: colors.light,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 20,
    marginBottom: 25,
  },
  textError: {
    marginLeft: -10,
    marginTop: 18,
    marginBottom: 16,
    fontSize: 12,
    color: colors.red,
  },
});

export {
  styles,
};
