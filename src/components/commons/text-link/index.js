import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

const TextLink = ({ onPress, title, style }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Text style={[style]}>{title}</Text>
  </TouchableWithoutFeedback>
);

TextLink.propTypes = {
  title: PropTypes.string,
  style: PropTypes.any,
  onPress: PropTypes.func.isRequired,
};

TextLink.defaultProps = {
  title: 'Cancel',
  style: styles.textLink,
};

export default TextLink;
