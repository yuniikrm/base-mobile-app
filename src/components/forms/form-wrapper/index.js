/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, View, Dimensions,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const FormWrapper = ({
  children, style, reset, defaultValues,
}) => {
  const isFocusedScreen = useIsFocused();

  useEffect(() => {
    if (isFocusedScreen) {
      reset && reset(defaultValues);
    }
  }, [isFocusedScreen]);

  return (
    <ScrollView>
      <View
        style={{ height: Dimensions.get('window').height, ...style }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'position' : null}
          {...(Platform.OS === 'ios' ? { keyboardVerticalOffset: 64 } : null)}
          enabled
        >
          <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              {children}
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

FormWrapper.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
  reset: PropTypes.func,
  defaultValues: PropTypes.object,
};

FormWrapper.defaultProps = {
  style: {},
  reset: null,
  defaultValues: {},
};

export default FormWrapper;
