/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import Navigations from '@navigations'
import { userStore } from '@store'
import { changeLanguage } from '@i18n';
import { View } from 'react-native';

const App = () => {
  const language = userStore(state => state.language)
  changeLanguage(language)

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 0)
  }, [])

  return (
      <NavigationContainer>
          <Navigations />   
      </NavigationContainer>
  );
};

export default App;
