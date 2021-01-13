/* eslint-disable camelcase */
import { Dimensions } from 'react-native'
import colors from './colors'

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

export const buttonPrimary = {
  backgroundColor: colors.red,
  color: colors.white,
  fontSize: 12
}

export const buttonSecondary = {
  backgroundColor: colors.blue,
  color: colors.white,
  fontSize: 12
}

export {
  colors,
  dimensions
}
