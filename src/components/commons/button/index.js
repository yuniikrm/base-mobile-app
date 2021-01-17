import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonNative } from 'react-native-elements';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import { styles } from './styles';

const Button = ({
  title = 'Submit', onPress, disabled = false, style = {}, secondary = false, loading = false,
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
);
Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  secondary: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
