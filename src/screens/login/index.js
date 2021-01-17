import React from 'react';
import { object } from 'prop-types';
import Login from '../../components/views/login';

const LoginScreen = ({ navigation }) => (<Login navigation={navigation} />);

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

export default LoginScreen;
