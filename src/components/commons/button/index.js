import React from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonNative } from 'react-native-elements'
import { TouchableWithoutFeedback, Text, View } from 'react-native'
import { styles } from './styles'

const Button = ({
  title, onPress, disabled, style, secondary, loading
}) => (
  <>
    {secondary ? (
      <View style={style}>
        <ButtonNative
          title={title}
          disabled={disabled}
          onPress={onPress}
          buttonStyle={[styles.buttonSecondaryStyle]}
          titleStyle={styles.titleStyle}
          loading={loading}
        />
        <TouchableWithoutFeedback onPress={onPress}>
          <Text style={styles.titleSecondaryStyle}>{title}</Text>
        </TouchableWithoutFeedback>
      </View>
    ) : (
      <ButtonNative
        title={title}
        disabled={disabled}
        onPress={onPress}
        buttonStyle={[styles.buttonStyle, style]}
        titleStyle={styles.titleStyle}
        loading={loading}
      />
    )}
  </>
)
Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  secondary: PropTypes.bool,
  loading: PropTypes.bool
}

Button.defaultProps = {
  title: 'Submit',
  disabled: false,
  secondary: false,
  loading: false,
  style: {}
}

export default Button
