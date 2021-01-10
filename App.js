/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Provider } from 'jotai'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import Navigations from '@navigations'
import { userStore } from '@store'
import ErrorBoundary from 'react-native-error-boundary'
import { FallbackErrorBoundary } from '@components/shared'
import { changeLanguage } from '@i18n'

const App = () => {
  const language = userStore((state) => state.language)
  changeLanguage(language)

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 0)
  }, [])

  return (
    <Provider>
      <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
        <NavigationContainer>
          <Navigations />
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  )
}

export default App
