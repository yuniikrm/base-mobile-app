import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import { Controller } from 'react-hook-form'
import { Input as TextInput } from 'react-native-elements'
import Icon from 'react-native-vector-icons/dist/Feather'
import { styles, commonStyles } from './styles'
import TextLink from '../../commons/text-link'

const RightIcon = ({ iconContent, onPress }) => {
  if (iconContent) {
    return (
      <TouchableOpacity disabled={!onPress} onPress={onPress}>
        {iconContent}
      </TouchableOpacity>
    )
  }
  return null
}

RightIcon.propTypes = {
  iconContent: PropTypes.object,
  onPress: PropTypes.func
}

RightIcon.defaultProps = {
  iconContent: null,
  onPress: null
}

const Input = ({
  name,
  rules,
  keyboardType,
  secureTextEntry,
  placeholder,
  control,
  rightIcon,
  onPressIcon,
  error,
  inputStyle,
  label,
  horizontalRuler,
  defaultValue,
  inputContainerStyle,
  maxLength,
  onEndEditing,
  titleErrorAction,
  onErrorAction
}) => {
  const getInputContainerStyle = () => {
    if (error) {
      return [styles.inputContainerStyleError, inputContainerStyle]
    }
    return [styles.inputContainerStyle, inputContainerStyle]
  }

  return (
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <View style={styles.container}>
          { label && (<Text style={[commonStyles.textDarkRegular, styles.label]}>{label}</Text>) }
          <TextInput
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onEndEditing={onEndEditing}
            onBlur={onBlur}
            maxLength={maxLength}
            rightIcon={(
              <RightIcon iconContent={rightIcon} onPress={onPressIcon} />
        )}
            inputStyle={[styles.inputStyle, inputStyle]}
            inputContainerStyle={getInputContainerStyle()}
            errorMessage={error && (
            <>
              <Icon name="alert-octagon" size={12} color="#B92500" />
              {' '}
              {error.message || 'This field is required.'}
              {'  '}
              {titleErrorAction && (
                <TextLink onPress={onErrorAction} title={titleErrorAction} />
              )}
            </>
            )}
            errorStyle={error && styles.textError}
          />
          {horizontalRuler ? <View style={styles.hr} /> : null}
        </View>
      )}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  rules: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  rightIcon: PropTypes.object,
  onPressIcon: PropTypes.func,
  error: PropTypes.any,
  inputStyle: PropTypes.object,
  inputContainerStyle: PropTypes.object,
  label: PropTypes.string,
  horizontalRuler: PropTypes.bool,
  maxLength: PropTypes.number,
  onEndEditing: PropTypes.func,
  titleErrorAction: PropTypes.string,
  onErrorAction: PropTypes.func
}

Input.defaultProps = {
  keyboardType: 'default',
  defaultValue: null,
  secureTextEntry: false,
  placeholder: null,
  rightIcon: null,
  onPressIcon: null,
  error: null,
  inputStyle: {},
  inputContainerStyle: {},
  label: null,
  horizontalRuler: false,
  maxLength: 50,
  onEndEditing: () => {},
  titleErrorAction: null,
  onErrorAction: () => {}
}

export default Input
