import React from 'react';
import { string, func } from 'prop-types';
import { Text, View, Button } from 'react-native';

const FallbackErrorBoundary = ({ error, resetError }) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{error.toString()}</Text>
    <Button onPress={resetError} title="Try again" />
  </View>
);

FallbackErrorBoundary.propTypes = {
  error: string,
  resetError: func,
};

FallbackErrorBoundary.defaultProps = {
  error: '',
  resetError: () => {},
};

export default FallbackErrorBoundary;
