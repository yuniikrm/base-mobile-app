import { StyleSheet } from 'react-native'
import tailwind from 'tailwind-rn'
import { buttonPrimary, colors } from '../../../styles'

const styles = StyleSheet.create({
  container: tailwind('p-4'),
  headerContainer: tailwind('mb-4'),
  headerText: tailwind('text-red-800 font-semibold text-xl'),
  bodyContainer: tailwind('mb-4'),
  bodyText: tailwind('text-sm'),
  buttonStyle: {
    ...tailwind('mb-4'),
    ...buttonPrimary
  }
})

export {
  styles,
  colors
}
