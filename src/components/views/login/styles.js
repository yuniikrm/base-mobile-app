import { StyleSheet } from 'react-native'
import tailwind from 'tailwind-rn'
import { buttonPrimary, colors } from '../../../styles'

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 14,
    height: 48,
    borderRadius: 8,
    ...buttonPrimary
  },
  titleStyle: tailwind('text-red-800 font-semibold')
})

export {
  styles,
  colors
}
